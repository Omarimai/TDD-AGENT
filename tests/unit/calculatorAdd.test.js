describe('calculatorAdd', () => {
  it('adds two positive numbers', () => {
    expect(calculatorAdd(5, 7)).toBe(12);
  });

  it('adds a positive and a negative number', () => {
    expect(calculatorAdd(5, -3)).toBe(2);
  });

  it('adds two negative numbers', () => {
    expect(calculatorAdd(-2, -3)).toBe(-5);
  });

  it('adds zero', () => {
    expect(calculatorAdd(0, 0)).toBe(0);
  });

  it('handles overflow', () => {
    expect(calculatorAdd(Number.MAX_VALUE, 1)).toBe(Infinity);
  });

  it('handles underflow', () => {
    expect(calculatorAdd(-Number.MAX_VALUE, -1)).toBe(-Infinity);
  });

  it('handles negative results', () => {
    expect(calculatorAdd(-5, 3)).toBe(-2);
  });
});