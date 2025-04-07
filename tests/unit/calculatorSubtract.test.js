describe('calculatorSubtract', () => {
  it('should subtract a smaller number from a larger number', () => {
    expect(calculatorSubtract(10, 4)).toBe(6);
  });

  it('should subtract a larger number from a smaller number', () => {
    expect(calculatorSubtract(5, 8)).toBe(-3);
  });

  it('should handle subtracting zero from a number', () => {
    expect(calculatorSubtract(5, 0)).toBe(5);
    expect(calculatorSubtract(0, 5)).toBe(-5);
  });

  it('should handle subtracting negative numbers', () => {
    expect(calculatorSubtract(-5, 3)).toBe(-8);
    expect(calculatorSubtract(3, -5)).toBe(8);
  });
});