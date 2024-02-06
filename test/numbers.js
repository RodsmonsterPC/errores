export const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "no se puede sumar";
  }
  return a + b;
};

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;

export const res = (a, b) => a - b;

export const getRand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getPI = () => 3.1416;

export const isEven = (a) => a % 2 === 0;

export const squart = (a) => Math.sqrt(a);

export const moreGreaterNumber = () => {
  const numbers = [3, 6, 2, 9, 1];

  const moreGreater = Math.max(...numbers);
  return moreGreater;
};
