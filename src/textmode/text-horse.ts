import { imageRGB, loadImage } from "@/utils/image";
import type { Textmodifier } from "textmode.js";

let horseImage: ImageData | null = null;

export const setup = async (t: Textmodifier) => {
  horseImage = await loadImage("twente.svg", [t.grid.cols, t.grid.rows]);
};

export const draw = (t: Textmodifier) => {
  for (let y = 0; y < t.grid.rows; y++) {
    for (let x = 0; x < t.grid.cols; x++) {
      t.push();

      const color = imageRGB(horseImage!, [x, y], [t.grid.cols, t.grid.rows]);

      t.char("#");
      t.charColor(color[0], color[1], color[2]);
      t.cellColor(0, 0, 0);
      t.translate(x - t.grid.cols / 2 + 1, y - t.grid.rows / 2);
      t.rect(1, 1);

      t.pop();
    }
  }
};

export const windowResized = async (t: Textmodifier) => {};
