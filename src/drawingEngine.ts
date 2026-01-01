import { getCharBitmap, renderCharacter } from './bitmapFont';

// Canvas dimensions
export const CANVAS_WIDTH = 32;
export const CANVAS_HEIGHT = 8;

// Pixel scale for display - pixel size with gap
export const PIXEL_SIZE = 14; // Size of each pixel
export const PIXEL_GAP = 2; // Gap between pixels
export const PIXEL_SCALE = PIXEL_SIZE + PIXEL_GAP;

export type Color = [number, number, number] | string;

export interface DrawCommand {
  dp?: [number, number, Color];
  dl?: [number, number, number, number, Color];
  dr?: [number, number, number, number, Color];
  df?: [number, number, number, number, Color];
  dc?: [number, number, number, Color];
  dfc?: [number, number, number, Color];
  dt?: [number, number, string, Color];
}

function parseColor(color: Color): [number, number, number] {
  if (typeof color === 'string') {
    // Parse hex color
    const hex = color.replace('#', '');
    if (hex.length !== 6) {
      throw new Error(`Invalid hex color: ${color}`);
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  } else if (Array.isArray(color) && color.length === 3) {
    return color as [number, number, number];
  } else {
    throw new Error(`Invalid color format: ${JSON.stringify(color)}`);
  }
}

function colorToString(rgb: [number, number, number]): string {
  const [r, g, b] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function drawPixel(imageData: ImageData, x: number, y: number, color: [number, number, number]): void {
  if (x < 0 || x >= CANVAS_WIDTH || y < 0 || y >= CANVAS_HEIGHT) {
    return; // Out of bounds
  }

  const [r, g, b] = color;
  const index = (y * CANVAS_WIDTH + x) * 4;
  imageData.data[index] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = 255; // Alpha
}

function drawLine(imageData: ImageData, x0: number, y0: number, x1: number, y1: number, color: [number, number, number]): void {
  // Bresenham's line algorithm
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  let x = x0;
  let y = y0;

  while (true) {
    drawPixel(imageData, x, y, color);
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
}

function drawRectangle(imageData: ImageData, x: number, y: number, width: number, height: number, color: [number, number, number]): void {
  // Draw outline
  for (let i = 0; i < width; i++) {
    drawPixel(imageData, x + i, y, color);
    drawPixel(imageData, x + i, y + height - 1, color);
  }
  for (let i = 0; i < height; i++) {
    drawPixel(imageData, x, y + i, color);
    drawPixel(imageData, x + width - 1, y + i, color);
  }
}

function fillRectangle(imageData: ImageData, x: number, y: number, width: number, height: number, color: [number, number, number]): void {
  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      drawPixel(imageData, x + px, y + py, color);
    }
  }
}

function drawCircle(imageData: ImageData, cx: number, cy: number, radius: number, color: [number, number, number]): void {
  // Midpoint circle algorithm
  let x = radius;
  let y = 0;
  let d = 1 - radius;

  while (x >= y) {
    drawPixel(imageData, cx + x, cy + y, color);
    drawPixel(imageData, cx - x, cy + y, color);
    drawPixel(imageData, cx + x, cy - y, color);
    drawPixel(imageData, cx - x, cy - y, color);
    drawPixel(imageData, cx + y, cy + x, color);
    drawPixel(imageData, cx - y, cy + x, color);
    drawPixel(imageData, cx + y, cy - x, color);
    drawPixel(imageData, cx - y, cy - x, color);

    if (d < 0) {
      d += 2 * y + 3;
    } else {
      d += 2 * (y - x) + 5;
      x--;
    }
    y++;
  }
}

function fillCircle(imageData: ImageData, cx: number, cy: number, radius: number, color: [number, number, number]): void {
  for (let y = -radius; y <= radius; y++) {
    for (let x = -radius; x <= radius; x++) {
      if (x * x + y * y <= radius * radius) {
        drawPixel(imageData, cx + x, cy + y, color);
      }
    }
  }
}

function drawText(imageData: ImageData, x: number, y: number, text: string, color: [number, number, number]): void {
  let currentX = x;

  for (const char of text) {
    const advance = renderCharacter(imageData, currentX, y, char, color);
    currentX += advance;
  }
}

export function clearCanvas(imageData: ImageData): void {
  // Fill with transparent pixels
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = 0; // R
    imageData.data[i + 1] = 0; // G
    imageData.data[i + 2] = 0; // B
    imageData.data[i + 3] = 0; // A (transparent)
  }
}

export function executeDrawCommand(imageData: ImageData, command: DrawCommand): void {
  if (command.dp) {
    const [x, y, color] = command.dp;
    const rgb = parseColor(color);
    drawPixel(imageData, x, y, rgb);
  } else if (command.dl) {
    const [x0, y0, x1, y1, color] = command.dl;
    const rgb = parseColor(color);
    drawLine(imageData, x0, y0, x1, y1, rgb);
  } else if (command.dr) {
    const [x, y, width, height, color] = command.dr;
    const rgb = parseColor(color);
    drawRectangle(imageData, x, y, width, height, rgb);
  } else if (command.df) {
    const [x, y, width, height, color] = command.df;
    const rgb = parseColor(color);
    fillRectangle(imageData, x, y, width, height, rgb);
  } else if (command.dc) {
    const [x, y, radius, color] = command.dc;
    const rgb = parseColor(color);
    drawCircle(imageData, x, y, radius, rgb);
  } else if (command.dfc) {
    const [x, y, radius, color] = command.dfc;
    const rgb = parseColor(color);
    fillCircle(imageData, x, y, radius, rgb);
  } else if (command.dt) {
    const [x, y, text, color] = command.dt;
    const rgb = parseColor(color);
    drawText(imageData, x, y, text, rgb);
  }
}

export function parseDrawingJSON(json: string): DrawCommand[] {
  const data = JSON.parse(json);
  
  if (!Array.isArray(data)) {
    throw new Error('Expected an array of drawing commands');
  }

  const commands: DrawCommand[] = [];
  for (const item of data) {
    if (typeof item !== 'object' || item === null) {
      throw new Error('Each command must be an object');
    }
    commands.push(item as DrawCommand);
  }

  return commands;
}
