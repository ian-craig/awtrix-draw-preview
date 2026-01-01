// Awtrix Official Font - Variable width 3x5 base font
// Extracted from https://github.com/Blueforcer/awtrix3/blob/main/src/AwtrixFont.h
// Licensed under 3-clause BSD license
// Characters are stored as byte arrays where each byte represents a row
// Bit-packed format: 0x80 = leftmost pixel, 0x01 = rightmost pixel

interface CharMetadata {
  bitmap: number[];
  width: number;
  height: number;
  advance: number;
}

const charBitmaps: Record<string, CharMetadata> = {
  ' ': { bitmap: [0x00], width: 8, height: 1, advance: 2 },
  '!': { bitmap: [0x80, 0x80, 0x80, 0x00, 0x80], width: 8, height: 5, advance: 2 },
  '"': { bitmap: [0xA0, 0xA0], width: 8, height: 2, advance: 4 },
  '#': { bitmap: [0xA0, 0xE0, 0xA0, 0xE0, 0xA0], width: 8, height: 5, advance: 4 },
  '$': { bitmap: [0x60, 0xC0, 0x60, 0xC0, 0x40], width: 8, height: 5, advance: 4 },
  '%': { bitmap: [0xA0, 0x20, 0x40, 0x80, 0xA0], width: 8, height: 5, advance: 4 },
  '&': { bitmap: [0xC0, 0xC0, 0xE0, 0xA0, 0x60], width: 8, height: 5, advance: 4 },
  "'": { bitmap: [0x80, 0x80], width: 8, height: 2, advance: 2 },
  '(': { bitmap: [0x40, 0x80, 0x80, 0x80, 0x40], width: 8, height: 5, advance: 3 },
  ')': { bitmap: [0x80, 0x40, 0x40, 0x40, 0x80], width: 8, height: 5, advance: 3 },
  '*': { bitmap: [0xA0, 0x40, 0xA0], width: 8, height: 3, advance: 4 },
  '+': { bitmap: [0x40, 0xE0, 0x40], width: 8, height: 3, advance: 4 },
  ',': { bitmap: [0x40, 0x80], width: 8, height: 2, advance: 3 },
  '-': { bitmap: [0xE0], width: 8, height: 1, advance: 4 },
  '.': { bitmap: [0x80], width: 8, height: 1, advance: 2 },
  '/': { bitmap: [0x20, 0x20, 0x40, 0x80, 0x80], width: 8, height: 5, advance: 4 },
  '0': { bitmap: [0xE0, 0xA0, 0xA0, 0xA0, 0xE0], width: 8, height: 5, advance: 4 },
  '1': { bitmap: [0x40, 0xC0, 0x40, 0x40, 0xE0], width: 8, height: 5, advance: 4 },
  '2': { bitmap: [0xE0, 0x20, 0xE0, 0x80, 0xE0], width: 8, height: 5, advance: 4 },
  '3': { bitmap: [0xE0, 0x20, 0xE0, 0x20, 0xE0], width: 8, height: 5, advance: 4 },
  '4': { bitmap: [0xA0, 0xA0, 0xE0, 0x20, 0x20], width: 8, height: 5, advance: 4 },
  '5': { bitmap: [0xE0, 0x80, 0xE0, 0x20, 0xE0], width: 8, height: 5, advance: 4 },
  '6': { bitmap: [0xE0, 0x80, 0xE0, 0xA0, 0xE0], width: 8, height: 5, advance: 4 },
  '7': { bitmap: [0xE0, 0x20, 0x20, 0x20, 0x20], width: 8, height: 5, advance: 4 },
  '8': { bitmap: [0xE0, 0xA0, 0xE0, 0xA0, 0xE0], width: 8, height: 5, advance: 4 },
  '9': { bitmap: [0xE0, 0xA0, 0xE0, 0x20, 0xE0], width: 8, height: 5, advance: 4 },
  ':': { bitmap: [0x80, 0x00, 0x80], width: 8, height: 3, advance: 2 },
  ';': { bitmap: [0x40, 0x00, 0x40, 0x80], width: 8, height: 4, advance: 3 },
  '<': { bitmap: [0x20, 0x40, 0x80, 0x40, 0x20], width: 8, height: 5, advance: 4 },
  '=': { bitmap: [0xE0, 0x00, 0xE0], width: 8, height: 3, advance: 4 },
  '>': { bitmap: [0x80, 0x40, 0x20, 0x40, 0x80], width: 8, height: 5, advance: 4 },
  '?': { bitmap: [0xE0, 0x20, 0x40, 0x00, 0x40], width: 8, height: 5, advance: 4 },
  '@': { bitmap: [0x40, 0xA0, 0xE0, 0x80, 0x60], width: 8, height: 5, advance: 4 },
  'A': { bitmap: [0xC0, 0xA0, 0xE0, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'B': { bitmap: [0xC0, 0xA0, 0xC0, 0xA0, 0xC0], width: 8, height: 5, advance: 4 },
  'C': { bitmap: [0x40, 0xA0, 0x80, 0xA0, 0x40], width: 8, height: 5, advance: 4 },
  'D': { bitmap: [0xC0, 0xA0, 0xA0, 0xA0, 0xC0], width: 8, height: 5, advance: 4 },
  'E': { bitmap: [0xE0, 0x80, 0xE0, 0x80, 0xE0], width: 8, height: 5, advance: 4 },
  'F': { bitmap: [0xE0, 0x80, 0xE0, 0x80, 0x80], width: 8, height: 5, advance: 4 },
  'G': { bitmap: [0x60, 0x80, 0xA0, 0xA0, 0x60], width: 8, height: 5, advance: 4 },
  'H': { bitmap: [0xA0, 0xA0, 0xE0, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'I': { bitmap: [0x80, 0x80, 0x80, 0x80, 0x80], width: 8, height: 5, advance: 2 },
  'J': { bitmap: [0x20, 0x20, 0x20, 0xA0, 0x40], width: 8, height: 5, advance: 4 },
  'K': { bitmap: [0xA0, 0xA0, 0xC0, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'L': { bitmap: [0x80, 0x80, 0x80, 0x80, 0xE0], width: 8, height: 5, advance: 4 },
  'M': { bitmap: [0x88, 0xD8, 0xA8, 0x88, 0x88], width: 8, height: 5, advance: 6 },
  'N': { bitmap: [0x90, 0xD0, 0xB0, 0x90, 0x90], width: 8, height: 5, advance: 5 },
  'O': { bitmap: [0x40, 0xA0, 0xA0, 0xA0, 0x40], width: 8, height: 5, advance: 4 },
  'P': { bitmap: [0xE0, 0xA0, 0xC0, 0x80, 0x80], width: 8, height: 5, advance: 4 },
  'Q': { bitmap: [0x40, 0xA0, 0xA0, 0xA0, 0x70], width: 8, height: 5, advance: 5 },
  'R': { bitmap: [0xE0, 0xA0, 0xC0, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'S': { bitmap: [0xE0, 0x80, 0xE0, 0x20, 0xE0], width: 8, height: 5, advance: 4 },
  'T': { bitmap: [0xE0, 0x40, 0x40, 0x40, 0x40], width: 8, height: 5, advance: 4 },
  'U': { bitmap: [0xA0, 0xA0, 0xA0, 0xA0, 0xE0], width: 8, height: 5, advance: 4 },
  'V': { bitmap: [0xA0, 0xA0, 0xA0, 0xA0, 0x40], width: 8, height: 5, advance: 4 },
  'W': { bitmap: [0x88, 0x88, 0x88, 0xA8, 0x50], width: 8, height: 5, advance: 6 },
  'X': { bitmap: [0xA0, 0xA0, 0x40, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'Y': { bitmap: [0xA0, 0xA0, 0xE0, 0x20, 0xC0], width: 8, height: 5, advance: 4 },
  'Z': { bitmap: [0xE0, 0x20, 0x40, 0x80, 0xE0], width: 8, height: 5, advance: 4 },
  '[': { bitmap: [0xE0, 0x80, 0x80, 0x80, 0xE0], width: 8, height: 5, advance: 4 },
  '\\': { bitmap: [0x80, 0x40, 0x20], width: 8, height: 3, advance: 4 },
  ']': { bitmap: [0xE0, 0x20, 0x20, 0x20, 0xE0], width: 8, height: 5, advance: 4 },
  '^': { bitmap: [0x40, 0xA0], width: 8, height: 2, advance: 4 },
  '_': { bitmap: [0xE0], width: 8, height: 1, advance: 4 },
  '`': { bitmap: [0x80, 0x40], width: 8, height: 2, advance: 3 },
  'a': { bitmap: [0xC0, 0x60, 0xA0, 0xE0], width: 8, height: 4, advance: 4 },
  'b': { bitmap: [0x80, 0xC0, 0xA0, 0xA0, 0xC0], width: 8, height: 5, advance: 4 },
  'c': { bitmap: [0x60, 0x80, 0x80, 0x60], width: 8, height: 4, advance: 4 },
  'd': { bitmap: [0x20, 0x60, 0xA0, 0xA0, 0x60], width: 8, height: 5, advance: 4 },
  'e': { bitmap: [0x60, 0xA0, 0xC0, 0x60], width: 8, height: 4, advance: 4 },
  'f': { bitmap: [0x20, 0x40, 0xE0, 0x40, 0x40], width: 8, height: 5, advance: 4 },
  'g': { bitmap: [0x60, 0xA0, 0xE0, 0x20, 0x40], width: 8, height: 5, advance: 4 },
  'h': { bitmap: [0x80, 0xC0, 0xA0, 0xA0, 0xA0], width: 8, height: 5, advance: 4 },
  'i': { bitmap: [0x80, 0x00, 0x80, 0x80, 0x80], width: 8, height: 5, advance: 2 },
  'j': { bitmap: [0x20, 0x00, 0x20, 0x20, 0xA0, 0x40], width: 8, height: 6, advance: 4 },
  'k': { bitmap: [0x80, 0xA0, 0xC0, 0xC0, 0xA0], width: 8, height: 5, advance: 4 },
  'l': { bitmap: [0xC0, 0x40, 0x40, 0x40, 0xE0], width: 8, height: 5, advance: 4 },
  'm': { bitmap: [0xE0, 0xE0, 0xE0, 0xA0], width: 8, height: 4, advance: 4 },
  'n': { bitmap: [0xC0, 0xA0, 0xA0, 0xA0], width: 8, height: 4, advance: 4 },
  'o': { bitmap: [0x40, 0xA0, 0xA0, 0x40], width: 8, height: 4, advance: 4 },
  'p': { bitmap: [0xC0, 0xA0, 0xA0, 0xC0, 0x80], width: 8, height: 5, advance: 4 },
  'q': { bitmap: [0x60, 0xA0, 0xA0, 0x60, 0x20], width: 8, height: 5, advance: 4 },
  'r': { bitmap: [0x60, 0x80, 0x80, 0x80], width: 8, height: 4, advance: 4 },
  's': { bitmap: [0x60, 0xC0, 0x60, 0xC0], width: 8, height: 4, advance: 4 },
  't': { bitmap: [0x40, 0xE0, 0x40, 0x40, 0x60], width: 8, height: 5, advance: 4 },
  'u': { bitmap: [0xA0, 0xA0, 0xA0, 0x60], width: 8, height: 4, advance: 4 },
  'v': { bitmap: [0xA0, 0xA0, 0xE0, 0x40], width: 8, height: 4, advance: 4 },
  'w': { bitmap: [0xA0, 0xE0, 0xE0, 0xE0], width: 8, height: 4, advance: 4 },
  'x': { bitmap: [0xA0, 0x40, 0x40, 0xA0], width: 8, height: 4, advance: 4 },
  'y': { bitmap: [0xA0, 0xA0, 0x60, 0x20, 0x40], width: 8, height: 5, advance: 4 },
  'z': { bitmap: [0xE0, 0x60, 0xC0, 0xE0], width: 8, height: 4, advance: 4 },
  '{': { bitmap: [0x60, 0x40, 0x80, 0x40, 0x60], width: 8, height: 5, advance: 4 },
  '|': { bitmap: [0x80, 0x80, 0x80, 0x80, 0x80], width: 8, height: 5, advance: 2 },
  '}': { bitmap: [0xC0, 0x40, 0x20, 0x40, 0xC0], width: 8, height: 5, advance: 4 },
  '~': { bitmap: [0x60, 0xC0], width: 8, height: 2, advance: 4 },
};

export function getCharBitmap(char: string): CharMetadata | null {
  return charBitmaps[char] || null;
}

export function renderCharacter(
  imageData: ImageData,
  x: number,
  y: number,
  char: string,
  color: [number, number, number]
): number {
  const charData = getCharBitmap(char);
  if (!charData) return 0;

  const { bitmap, height } = charData;

  // Bottom-align characters shorter than 5 pixels
  const verticalOffset = Math.max(0, 5 - height);

  // Draw each row of the character
  for (let row = 0; row < bitmap.length && row < height; row++) {
    const byte = bitmap[row];
    // Draw from left to right (MSB to LSB)
    for (let col = 0; col < 8; col++) {
      const pixelOn = (byte & (0x80 >> col)) !== 0;
      if (pixelOn) {
        drawPixel(imageData, x + col, y + verticalOffset + row, color);
      }
    }
  }

  return charData.advance;
}

function drawPixel(imageData: ImageData, x: number, y: number, color: [number, number, number]): void {
  // Bounds checking (32x8 canvas)
  if (x < 0 || x >= 32 || y < 0 || y >= 8) return;

  const [r, g, b] = color;
  const index = (y * 32 + x) * 4;
  imageData.data[index] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = 255;
}

export function getCharWidth(char: string): number {
  const charData = getCharBitmap(char);
  return charData ? charData.advance : 2;
}

export function getCharMetadata(char: string): CharMetadata | null {
  return getCharBitmap(char);
}
