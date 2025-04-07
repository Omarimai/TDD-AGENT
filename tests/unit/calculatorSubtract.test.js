describe('calculatorSubtract', () => {
  it('should return a positive result when subtracting smaller number from larger number', () => {
    expect(calculatorSubtract(10, 4)).toBe(6);
    expect(calculatorSubtract(5, 8)).toBe(-3);
  });

  it('should handle subtracting zero from a number', () => {
    expect(calculatorSubtract(0, 5)).toBe(-5);
    expect(calculatorSubtract(5, 0)).toBe(5);
  });

  it('should handle very large numbers', () => {
    expect(calculatorSubtract(1000000, 500000)).toBe(500000);
    expect(calculatorSubtract(500000, 1000000)).toBe(-500000);
  });

  it('should handle negative numbers as inputs', () => {
    expect(calculatorSubtract(-5, 3)).toBe(-8);
    expect(calculatorSubtract(3, -5)).toBe(8);
  });

  it('should handle non-integer inputs', () => {
    expect(calculatorSubtract(7.5, 3.2)).toBe(4.3);
    expect(calculatorSubtract(3.2, 7.5)).toBe(-4.3);
  });

  it('should handle subtraction of floating point numbers', () => {
    expect(calculatorSubtract(10.5, 4.3)).toBe(6.2);
    expect(calculatorSubtract(4.3, 10.5)).toBe(-6.2);
  });

  it('should handle string representations of numbers', () => {
    expect(calculatorSubtract('10', '4')).toBe(6);
    expect(calculatorSubtract('5', '8')).toBe(-3);
  });
});