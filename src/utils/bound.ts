export function bound(n: number, floor: number, ceil: number): number {
  return Math.min(Math.max(n, floor), ceil);
}
