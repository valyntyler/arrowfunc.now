import { imageRGB, loadImage } from "@/utils/image";
import type { Textmodifier } from "textmode.js";

let horseImage: ImageData | null = null;

export const setup = async (t: Textmodifier) => {
  horseImage = await loadImage(`${import.meta.env.BASE_URL}twente.svg`, [
    t.grid.cols,
    t.grid.rows,
  ]);
};

export const draw = (t: Textmodifier) => {
  const time = t.frameCount * 0.01;
  for (let y = 0; y < t.grid.rows; y++) {
    for (let x = 0; x < t.grid.cols; x++) {
      t.push();

      // Compute Plasma
      const nx = x / t.grid.cols;
      const ny = y / t.grid.rows;

      const plasma1 = Math.sin(nx * 8 + time);
      const plasma2 = Math.sin(ny * 6 + time * 1.3);
      const plasma3 = Math.sin((nx + ny) * 4 + time * 0.8);
      const plasma4 = Math.sin(Math.sqrt(nx * nx + ny * ny) * 12 + time * 1.5);

      const combined = (plasma1 + plasma2 + plasma3 + plasma4) / 4;
      const intensity = (combined + 1) / 2;

      const hue = (intensity + time * 0.5) % 1;
      const saturation = 1.0;
      const lightness = intensity;

      const hsl2rgb = (
        h: number,
        s: number,
        l: number,
      ): [number, number, number] => {
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
        const m = l - c / 2;
        let r, g, b;

        if (h < 1 / 6) [r, g, b] = [c, x, 0];
        else if (h < 2 / 6) [r, g, b] = [x, c, 0];
        else if (h < 3 / 6) [r, g, b] = [0, c, x];
        else if (h < 4 / 6) [r, g, b] = [0, x, c];
        else if (h < 5 / 6) [r, g, b] = [x, 0, c];
        else [r, g, b] = [c, 0, x];

        return [
          Math.floor((r + m) * 255),
          Math.floor((g + m) * 255),
          Math.floor((b + m) * 255),
        ];
      };

      const [r, g, b] = hsl2rgb(hue, saturation, lightness);

      // Draw Horse
      const color = imageRGB(horseImage!, [x, y], [t.grid.cols, t.grid.rows]);

      if (color[1] >= 1) {
        color[1] = color[1] * 0.8 + ((r + g + b) / 3) * 0.1;
      }

      if (color[1] > 250) {
        t.char("#");
      } else if (color[1] > 191) {
        t.char("@");
      } else if (color[1] > 127) {
        t.char("%");
      } else if (color[1] > 95) {
        t.char("*");
      } else if (color[1] > 47) {
        t.char("+");
      } else {
        t.char(".");
      }

      t.charColor(0, color[1], 0);
      t.cellColor(0, 0, 0);
      t.translate(x - t.grid.cols / 2 + 1, y - t.grid.rows / 2);

      if (color[1] >= 1) {
        t.rect(1, 1);
      }

      t.pop();
    }
  }
};

export const windowResized = async (t: Textmodifier) => {};
