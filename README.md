# Awtrix 3 Drawing Preview

A web-based tool to preview Awtrix 3 drawing commands on a 32×8 pixel LED matrix display.

## Features

- Real-time preview with live validation
- All drawing commands supported: `dp`, `dl`, `dr`, `df`, `dc`, `dfc`, `dt`
- Hex and RGB color formats
- Responsive design

## Drawing Commands

| Command | Format | Description |
|---------|--------|-------------|
| `dp` | `[x, y, color]` | Draw pixel |
| `dl` | `[x0, y0, x1, y1, color]` | Draw line |
| `dr` | `[x, y, width, height, color]` | Draw rectangle |
| `df` | `[x, y, width, height, color]` | Fill rectangle |
| `dc` | `[x, y, radius, color]` | Draw circle |
| `dfc` | `[x, y, radius, color]` | Fill circle |
| `dt` | `[x, y, text, color]` | Draw text |

**Colors:** Hex `"#RRGGBB"` or RGB `[r, g, b]` (0-255)

## Usage

```bash
npm install
npm run dev      # Development server
npm run build    # Production build (outputs to dist/)
```

## Deploy to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to the `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. Enable GitHub Pages in your repository settings and select the `gh-pages` branch.

## References

- [Awtrix 3 API](https://blueforcer.github.io/awtrix3/)
- [Drawing Instructions](https://blueforcer.github.io/awtrix3/#/api?id=drawing-instructions)

## License

MIT

## Attribution

Background image and font bitmaps from [Awtrix 3](https://github.com/Blueforcer/awtrix3)
