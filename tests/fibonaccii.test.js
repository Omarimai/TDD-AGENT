// fibonacci.test.js
const { fibonacci } = require('./fibonacci');

describe('Fibonacci Sequence Generator', () => {
  test('returns 0 for input 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('returns 1 for input 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('returns 1 for input 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('returns 2 for input 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('returns 3 for input 4', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('returns 5 for input 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('returns 8 for input 6', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('returns 55 for input 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('returns 6765 for input 20', () => {
    expect(fibonacci(20)).toBe(6765);
  });

  test('throws an error for negative inputs', () => {
    expect(() => fibonacci(-1)).toThrow();
    expect(() => fibonacci(-10)).toThrow();
  });

  test('throws an error for non-integer inputs', () => {
    expect(() => fibonacci(1.5)).toThrow();
    expect(() => fibonacci('string')).toThrow();
    expect(() => fibonacci(null)).toThrow();
    expect(() => fibonacci(undefined)).toThrow();
  });

  test('calculates first 10 fibonacci numbers correctly', () => {
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const result = Array.from({ length: 10 }, (_, i) => fibonacci(i));
    expect(result).toEqual(expected);
  });

  // Performance test for memoization (if implemented)
  test('handles larger inputs efficiently', () => {
    // This should execute quickly if memoization is implemented
    expect(() => fibonacci(40)).not.toThrow();
  });
});