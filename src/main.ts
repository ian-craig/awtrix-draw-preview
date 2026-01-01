import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PIXEL_SCALE,
  PIXEL_SIZE,
  PIXEL_GAP,
  executeDrawCommand,
  parseDrawingJSON,
  clearCanvas,
  DrawCommand,
} from './drawingEngine';
import './style.css';

class AwtrixPreviewApp {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private imageData: ImageData;
  private textarea: HTMLTextAreaElement;
  private errorDisplay: HTMLDivElement;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.textarea = document.getElementById('codeInput') as HTMLTextAreaElement;
    this.errorDisplay = document.getElementById('errorDisplay') as HTMLDivElement;

    // Set canvas size
    this.canvas.width = CANVAS_WIDTH * PIXEL_SCALE;
    this.canvas.height = CANVAS_HEIGHT * PIXEL_SCALE;

    // Create image data for logical canvas
    this.imageData = this.ctx.createImageData(CANVAS_WIDTH, CANVAS_HEIGHT);

    // Initialize with blank canvas
    this.clearAndRender();

    // Add event listeners
    this.textarea.addEventListener('input', () => this.handleInputChange());
    this.textarea.addEventListener('change', () => this.handleInputChange());

    // Load example on startup
    this.loadExample();
  }

  private clearAndRender(): void {
    clearCanvas(this.imageData);
    this.render();
  }

  private render(): void {
    // Clear canvas with transparency
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Scale up the image data to the canvas with gaps
    const displayWidth = CANVAS_WIDTH * PIXEL_SCALE;
    const displayHeight = CANVAS_HEIGHT * PIXEL_SCALE;
    const scaledImageData = this.ctx.createImageData(displayWidth, displayHeight);

    for (let y = 0; y < CANVAS_HEIGHT; y++) {
      for (let x = 0; x < CANVAS_WIDTH; x++) {
        const srcIdx = (y * CANVAS_WIDTH + x) * 4;
        const r = this.imageData.data[srcIdx];
        const g = this.imageData.data[srcIdx + 1];
        const b = this.imageData.data[srcIdx + 2];
        const a = this.imageData.data[srcIdx + 3];

        // Fill pixel block (with gap on right and bottom)
        const startX = x * PIXEL_SCALE;
        const startY = y * PIXEL_SCALE;
        for (let sy = 0; sy < PIXEL_SIZE; sy++) {
          for (let sx = 0; sx < PIXEL_SIZE; sx++) {
            const dstIdx = ((startY + sy) * displayWidth + (startX + sx)) * 4;
            scaledImageData.data[dstIdx] = r;
            scaledImageData.data[dstIdx + 1] = g;
            scaledImageData.data[dstIdx + 2] = b;
            scaledImageData.data[dstIdx + 3] = a;
          }
        }
      }
    }

    this.ctx.putImageData(scaledImageData, 0, 0);
  }

  private handleInputChange(): void {
    const input = this.textarea.value.trim();

    if (!input) {
      this.clearAndRender();
      this.errorDisplay.innerHTML = '';
      this.errorDisplay.style.display = 'none';
      return;
    }

    try {
      const commands = parseDrawingJSON(input);
      clearCanvas(this.imageData);

      for (const command of commands) {
        try {
          executeDrawCommand(this.imageData, command);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          this.showError(`Command execution error: ${message}`);
          return;
        }
      }

      this.render();
      this.errorDisplay.innerHTML = '';
      this.errorDisplay.style.display = 'none';
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.showError(`Parse error: ${message}`);
    }
  }

  private showError(message: string): void {
    this.errorDisplay.innerHTML = `<strong>Error:</strong> ${escapeHtml(message)}`;
    this.errorDisplay.style.display = 'block';
  }

  private loadExample(): void {
    const exampleCode = `[
    { "dc": [28, 4, 3, "#FF0000"] },
    { "dr": [20, 4, 4, 4, "#0000FF"] },
    { "df": [8, 2, 4, 4, "#00FF00"] },
    { "dt": [0, 0, "HELLO", "#FFFF00"] }
]`;
    this.textarea.value = exampleCode;
    this.handleInputChange();
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AwtrixPreviewApp();
});
