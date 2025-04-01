// fizzbuzz.test.js
const { fizzBuzz } = require('./fizzbuzz');

describe('FizzBuzz', () => {
  test('returns "1" for input 1', () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  test('returns "2" for input 2', () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  test('returns "Fizz" for input 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  test('returns "4" for input 4', () => {
    expect(fizzBuzz(4)).toBe("4");
  });

  test('returns "Buzz" for input 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test('returns "Fizz" for input 6', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  test('returns "Buzz" for input 10', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test('returns "FizzBuzz" for input 15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test('returns "FizzBuzz" for input 30', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  test('throws an error for non-number inputs', () => {
    expect(() => fizzBuzz("string")).toThrow();
    expect(() => fizzBuzz(null)).toThrow();
    expect(() => fizzBuzz(undefined)).toThrow();
  });

  test('throws an error for negative numbers', () => {
    expect(() => fizzBuzz(-1)).toThrow();
  });

  test('throws an error for zero', () => {
    expect(() => fizzBuzz(0)).toThrow();
  });

  test('returns the correct sequence for range 1-20', () => {
    const expected = [
      "1", "2", "Fizz", "4", "Buzz", 
      "Fizz", "7", "8", "Fizz", "Buzz", 
      "11", "Fizz", "13", "14", "FizzBuzz", 
      "16", "17", "Fizz", "19", "Buzz"
    ];
    
    const result = Array.from({ length: 20 }, (_, i) => fizzBuzz(i + 1));
    expect(result).toEqual(expected);
  });
});