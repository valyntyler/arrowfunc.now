import type { Textmodifier } from "textmode.js";

type Drop = { y: number; speed: number; length: number; chars: string[] };

// Rain drop system
const drops: Drop[] = [];
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const setup = (tm: Textmodifier) => {
  // Initialize rain drops
  for (let gridX = 0; gridX < tm.grid.cols; gridX++) {
    drops[gridX] = {
      y: Math.random() * -50,
      speed: Math.random() * 0.3 + 0.1,
      length: Math.floor(Math.random() * 15) + 5,
      chars: [],
    };

    // Generate random characters for this drop
    for (let i = 0; i < drops[gridX]!.length; i++) {
      drops[gridX]!.chars[i] = chars[Math.floor(Math.random() * chars.length)]!;
    }
  }
};

export const draw = (tm: Textmodifier) => {
  tm.background(0);

  // Update and draw each rain drop
  for (let gridX = 0; gridX < drops.length; gridX++) {
    const drop = drops[gridX]!;

    // Draw the trail
    for (let i = 0; i < drop.length; i++) {
      const gridY = drop.y - i;

      if (gridY >= 0 && gridY < tm.grid.rows) {
        // Calculate fade based on position in trail
        const fade = (drop.length - i) / drop.length;

        // Body fades from bright green to dark green
        const green = Math.floor(255 * fade * 0.8);

        // Occasionally change character for glitch effect
        if (Math.random() < 0.1) {
          drop.chars[i] = chars[Math.floor(Math.random() * chars.length)]!;
        }

        tm.char(drop.chars[i]!);
        tm.cellColor(0, 0, 0);

        // Convert grid coordinates to center-based coordinates
        const x = gridX + 1 - tm.grid.cols / 2;
        const y = Math.floor(gridY) - tm.grid.rows / 2;

        // Apply vignette
        const radius = Math.min(tm.grid.cols / 2, tm.grid.rows / 2);
        const vignette = 10;
        const distance = Math.sqrt(x * x + y * y) - radius;
        const brightness = (255 * (1 - distance)) / vignette;
        tm.charColor(0, brightness, 0);

        tm.push();
        tm.translate(x, y, 0);
        tm.rect(1, 1);
        tm.pop();
      }
    }

    // Update drop position
    drop.y += drop.speed;

    // Reset drop when it goes off screen
    if (drop.y - drop.length > tm.grid.rows) {
      drop.y = Math.random() * -50;
      drop.speed = Math.random() * 0.3 + 0.1;
      drop.length = Math.floor(Math.random() * 15) + 5;

      // Generate new random characters
      for (let i = 0; i < drop.length; i++) {
        drop.chars[i] = chars[Math.floor(Math.random() * chars.length)]!;
      }
    }
  }
};

export const windowResized = (tm: Textmodifier) => {
  tm.resizeCanvas(window.innerWidth, window.innerHeight);

  // Reinitialize drops for new grid size
  drops.length = 0;
  for (let gridX = 0; gridX < tm.grid.cols; gridX++) {
    drops[gridX] = {
      y: Math.random() * -50,
      speed: Math.random() * 0.3 + 0.1,
      length: Math.floor(Math.random() * 15) + 5,
      chars: [],
    };

    for (let i = 0; i < drops[gridX]!.length; i++) {
      drops[gridX]!.chars[i] = chars[Math.floor(Math.random() * chars.length)]!;
    }
  }
};
