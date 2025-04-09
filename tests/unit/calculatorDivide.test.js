describe('calculatorDivide', () => {
  it('divides two positive numbers correctly', () => {
    expect(calculatorDivide(10, 2)).toBe(5);
  });

  it('divides positive number by negative number correctly', () => {
    expect(calculatorDivide(10, -2)).toBe(-5);
  });

  it('divides two negative numbers correctly', () => {
    expect(calculatorDivide(-10, -2)).toBe(5);
  });

  it('handles divide by zero scenario', () => {
    expect(() => calculatorDivide(10, 0)).toThrow('Divide by zero error');
  });
});