import { describe, test, expect } from "vitest";
import { arraySum, arraylength, creatStore, maxValue, numbers } from "./array";
import exp from "constants";

describe("Pruebas de arrays", () => {
  test("Debria de agregar una fruta", () => {
    const store = creatStore();
    store.addFruit("Fresas");
    expect(store.getFruits()).toStrictEqual(["Fresas"]);
  });

  test("Deberia de agregar 2 frutas", () => {
    const store = creatStore();
    store.addFruit("manzana");
    store.addFruit("banana");
    const fruitList = store.getFruits();
    expect(fruitList).toStrictEqual(["manzana", "banana"]);
  });

  test("Deberia de tener manzana", () => {
    const store = creatStore();
    store.addFruit("manzana");
    store.addFruit("pera");
    const fruitList = store.getFruits();
    expect(fruitList).toContain("pera");
    expect(fruitList).not.toContain("piña");
  });

  test("Deberia de tener 3 frutas", () => {
    const store = creatStore();
    store.addFruit("manzana");
    store.addFruit("pera");
    store.addFruit("limon");
    const fruitList = store.getFruits();

    expect(fruitList).toHaveLength(3);
  });

  test("Probando agregar objetos", () => {
    const store = creatStore();
    store.addFruit({
      name: "Manzana",
      price: 10,
    });
    const fruitList = store.getFruits();
    expect(fruitList).toContainEqual({
      name: "Manzana",
      price: 10,
    });
  });

  test("Devuelve el lenght del array", () => {
    const number = numbers();
    number.addNumber(1);
    number.addNumber(2);
    number.addNumber(3);
    const arrayNumbers = number.getNumbers();

    expect(arrayNumbers).toHaveLength(3);
  });

  test("Devuelve la suma de los elementos de un array", () => {
    const number = numbers();
    number.addNumber(1);
    number.addNumber(2);
    number.addNumber(3);
    const sumArray = number.getNumbers();

    const total = sumArray.reduce((counter, number) => {
      return (counter += number);
    });
    expect(total).toBe(6);
  });

  test("Devuelve el valor mayor de un array", () => {
    const number = numbers();
    number.addNumber(4);
    number.addNumber(7);
    number.addNumber(2);
    number.addNumber(9);
    number.addNumber(5);

    const numberArray = number.getNumbers();

    const greaterValue = Math.max(...numberArray);
    expect(greaterValue).toBe(9);
  });

  test("Filtrar los numeros pares de un array", () => {
    const number = numbers();
    number.addNumber(1);
    number.addNumber(2);
    number.addNumber(3);
    number.addNumber(4);
    number.addNumber(5);

    const arrayFilter = number.getNumbers();

    const evenNumbers = arrayFilter.filter((number) => number % 2 === 0);

    expect(evenNumbers).toStrictEqual([2, 4]);
  });

  test("Comprobar si se revierte el orden de los valores de un array", () => {
    const number = numbers();
    number.addNumber(1);
    number.addNumber(2);
    number.addNumber(3);

    const arrayNumbers = number.getNumbers();

    const reverseArray = arrayNumbers.reverse();

    expect(reverseArray).toStrictEqual([3, 2, 1]);
  });
});
