/**
 * Rounds a number down (towards zero) to the nearest multiple of significance.
 *
 * @param n The number to round
 * @param s The multiple of significance to round down to
 * @returns The floor of `n` to the `s` multiple
 */
export function floor(n: number, s: number): number {
  return Math.floor(n / s) * s;
}
