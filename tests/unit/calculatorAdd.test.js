describe('calculatorAdd', () => {
  // Standard cases
  test('adds two positive numbers correctly', () => {
    expect(calculatorAdd(5, 7)).toBe(12);
  });

  test('adds a positive and a negative number correctly', () => {
    expect(calculatorAdd(5, -3)).toBe(2);
  });

  test('adds two negative numbers correctly', () => {
    expect(calculatorAdd(-2, -3)).toBe(-5);
  });

  // Edge cases
  test('handles very large numbers without overflow', () => {
    expect(calculatorAdd(1000000, 2000000)).toBe(3000000);
  });

  test('handles addition of zero correctly', () => {
    expect(calculatorAdd(0, 5)).toBe(5);
    expect(calculatorAdd(-3, 0)).toBe(-3);
  });

  test('handles non-integer inputs appropriately', () => {
    expect(calculatorAdd(1.5, 2.5)).toBe(4);
    expect(calculatorAdd(-1.5, -2.5)).toBe(-4);
  });
});