export const creatStore = () => {
  const fruits = [];
  console.log("hola");
  return {
    addFruit: (fruit) => {
      fruits.push(fruit);
    },
    getFruits: () => {
      return fruits;
    },
  };
};

export const numbers = () => {
  const numbers = [];

  return {
    addNumber: (number) => {
      numbers.push(number);
    },
    getNumbers: () => {
      return numbers;
    },
  };
};

export const arraylength = () => {
  const numbers = [1, 2, 3];

  return numbers.length;
};

export const arraySum = () => {
  const numbers = [1, 2, 3];

  const total = numbers.reduce((counter, number) => {
    return counter + number;
  }, 0);

  return total;
};

export const maxValue = () => {
  const numbers = [4, 7, 2, 9, 5];
  const greaterNumber = Math.max(...numbers);
  return greaterNumber;
};
