describe('calculatorSubtract', () => {
  it('should return a positive result when subtracting smaller number from larger number', () => {
    expect(calculatorSubtract(10, 4)).toBe(6);
  });

  it('should return a negative result when subtracting larger number from smaller number', () => {
    expect(calculatorSubtract(5, 8)).toBe(-3);
  });

  it('should handle subtracting zero from a number', () => {
    expect(calculatorSubtract(0, 5)).toBe(-5);
    expect(calculatorSubtract(5, 0)).toBe(5);
  });

  it('should handle very large numbers', () => {
    expect(calculatorSubtract(9000, 10000)).toBe(-1000);
  });

  it('should handle negative numbers as inputs', () => {
    expect(calculatorSubtract(-5, -3)).toBe(-2);
    expect(calculatorSubtract(-2, -5)).toBe(3);
    expect(calculatorSubtract(3, 5)).toBe(-2);
  });

  it('should handle non-integer inputs', () => {
    expect(calculatorSubtract('5', 3)).toBe(2);
    expect(calculatorSubtract(2.5, 1.3)).toBe(1.2);
  });
});