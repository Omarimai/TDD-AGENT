describe('calculatorAdd', () => {
  describe('Basic Operations', () => {
    it('adds two positive numbers correctly', () => {
      expect(calculatorAdd(5, 7)).toBe(12);
    });

    it('adds a positive and a negative number correctly', () => {
      expect(calculatorAdd(5, -3)).toBe(2);
    });

    it('adds two negative numbers correctly', () => {
      expect(calculatorAdd(-2, -3)).toBe(-5);
    });
  });

  describe('Edge Cases', () => {
    it('handles very large numbers without overflow', () => {
      expect(calculatorAdd(Infinity, Infinity)).toBe(Infinity);
    });

    it('handles addition of zero correctly', () => {
      expect(calculatorAdd(0, 0)).toBe(0);
      expect(calculatorAdd(5, 0)).toBe(5);
      expect(calculatorAdd(-3, 0)).toBe(-3);
    });

    it('handles non-integer inputs appropriately', () => {
      expect(calculatorAdd(1.5, 2.5)).toBe(4);
      expect(calculatorAdd(-1.5, 3.5)).toBe(2);
    });
  });
});