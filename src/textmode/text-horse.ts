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

      t.charColor(color[1], color[1], color[1]);
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
