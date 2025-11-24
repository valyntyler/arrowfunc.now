import type { Textmodifier } from "textmode.js";

type Raindrop = { y: number; speed: number; length: number; chars: string[] };

const drops: Raindrop[] = [];
const chars: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const setup = (t: Textmodifier) => {
  // Initialize rain drops
  for (let x = 0; x < t.grid.cols; x++) {
    drops[x] = {
      y: Math.random() * -50,
      speed: Math.random() * 0.3 + 0.1,
      length: Math.floor(Math.random() * 15) + 5,
      chars: [],
    };

    // Generate random characters for this drop
    for (let i = 0; i < drops[x]!.length; i++) {
      drops[x]!.chars[i] = chars[Math.floor(Math.random() * chars.length)]!;
    }
  }
};

export const draw = (t: Textmodifier) => {
  // Update and draw each rain drop
  for (let x = 0; x < drops.length; x++) {
    const drop = drops[x]!;

    // Draw the trail
    for (let i = 0; i < drop.length; i++) {
      const y = drop.y - i;
      if (y >= 0 && y < t.grid.rows) {
        t.push();

        // Calculate fade based on position in trail
        const fade = (drop.length - i) / drop.length;

        // Body fades from bright green to dark green
        const green = Math.floor(255 * fade * 0.8);
        t.charColor(0, green, 0);

        // Apply vignette
        const center = [t.grid.cols / 2, t.grid.rows / 2];
        const radius = Math.min(center[0]!, center[1]!);
        const circle_fade = 10;

        const diff = [center[0]! - x, center[1]! - y];
        const distance =
          Math.sqrt(diff[0]! * diff[0]! + diff[1]! * diff[1]!) - radius;

        const intensity = (255 * (1 - distance)) / circle_fade;
        // t.charColor(0, 255, 0);

        // Occasionally change character for glitch effect
        if (Math.random() < 0.1) {
          drop.chars[i]! = chars[Math.floor(Math.random() * chars.length)]!;
        }

        t.char(drop.chars[i]!);
        t.cellColor(0, x, 0);
        t.rect(x, Math.floor(y));

        t.pop();
      }
    }

    // Update drop position
    drop.y += drop.speed;

    // Reset drop when it goes off screen
    if (drop.y - drop.length > t.grid.rows) {
      drop.y = Math.random() * -50;
      drop.speed = Math.random() * 0.3 + 0.1;
      drop.length = Math.floor(Math.random() * 15) + 5;

      // Generate new random characters
      for (let i = 0; i < drop.length; i++) {
        drop.chars[i]! = chars[Math.floor(Math.random() * chars.length)]!;
      }
    }
  }
};

export const windowResized = (t: Textmodifier) => {};
