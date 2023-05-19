import { describe, test, expect } from "vitest";

import {
  sum,
  mul,
  div,
  res,
  getRand,
  getPI,
  isEven,
  squart,
  moreGreaterNumber,
} from "./numbers";

describe("Prubea con numeros", () => {
  const suma = sum(5, 5);
  const multiplicar = mul(6, 6);
  const division = div(4, 4);
  const resta = res(3, 3);
  test("Deberia sumar 2 numeros", () => {
    expect(suma).toBe(10);
  });

  test("Deberia dar 10 al sumar 5 mas 5", () => {
    expect(suma).toBe(10);
  });

  test("Deberia dar 36 al multiplicar 6 por 6", () => {
    expect(multiplicar).toBe(36);
  });
  test("Deberia dar 1 al dividir 4 entre 4", () => {
    expect(division).toBe(1);
  });
  test("Deberia dar 0 al dividir 3 menos 3", () => {
    expect(resta).toBe(0);
  });

  // test("Deberia de obtener un número aleatorio entre 5, 10", () => {
  //   expect(getRand(5, 10)).toBeGreaterThan(4);
  //   expect(getRand(5, 10)).toBeGreaterThanOrEqual(5);
  //   expect(getRand(5, 10)).toBeLessThan(11);
  //   expect(getRand(5, 10)).toBeGreaterThanOrEqual(10);
  // });

  test("Debria ser mayor a 3 la constante de Pi", () => {
    expect(getPI()).toBeGreaterThan(3);
    expect(getPI()).toBeLessThan(4);
  });

  test("Saber si el numero es Par", () => {
    const number = isEven(4);
    expect(number).toBe(true);
  });

  test("Saber la raiz cuadrada de un número", () => {
    const number = squart(9);
    expect(number).toBe(3);
  });

  test("El mayor numero de un array", () => {
    const number = moreGreaterNumber();

    expect(number).toBe(9);
  });
});
