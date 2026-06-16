import { floor } from 'sig-floor';
import { describe, expect, it } from 'vitest';

describe('floor', () => {
  it('is a function', () => {
    expect(typeof floor).toBe('function');
  });

  it('rounds down to the nearest multiple of significance', () => {
    expect(floor(169.65, 1)).toBe(169);
    expect(floor(169.65, 0.05)).toBe(169.65);
    expect(floor(2.98, 2)).toBe(2);
    expect(floor(-4.5, -1)).toBe(-4);
    expect(floor(2.5, 1)).toBe(2);
    expect(floor(-2.5, -2)).toBe(-2);
    expect(floor(1.5, 0.1)).toBe(1.5);
    expect(floor(0.234, 0.01)).toBe(0.23);
    expect(floor(10, 3)).toBe(9);
    expect(floor(36, 7)).toBe(35);
    expect(floor(660, 100)).toBe(600);
  });
});
