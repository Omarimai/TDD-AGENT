// tests/calculator.test.js

const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  describe('add function', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    test('handles negative numbers', () => { 
      expect(add(-1, -2)).toBe(-3);
      expect(add(-5, 10)).toBe(5);
    });
    
    test('handles decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });
  
  describe('subtract function', () => {
    test('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    
    test('handles negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });
  
  describe('multiply function', () => {
    test('multiplies two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });
    
    test('handles zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 10)).toBe(0);
    });
    
    test('handles negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });
  });
  
  describe('divide function', () => {
    test('divides two numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });
    
    test('handles decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });
    
    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});