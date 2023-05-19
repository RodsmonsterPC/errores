//primr paso importar la funcion a probar

import exp from "constants";
import {
  Poliword,
  Saludar,
  capitalizeString,
  countVowels,
  cutString,
  getId,
  reverseString,
  saludar,
} from "./string";
import { test, expect, describe } from "vitest";

describe("Pruebas con string", () => {
  test("deberia saludar", () => {
    expect(Saludar("")).toMatch("Hola");
  });

  test("deberia saludar alvaro", () => {
    const saludo = Saludar("Alvaro");
    expect(saludo).toBe("Hola soy Alvaro");
  });

  test("No deberia saludar a Alvaro", () => {
    const saludo = Saludar("Rodo");
    expect(saludo).toBe("Hola soy Rodo");
  });

  test("Deberia de marcar error al recibir numeros", () => {
    const saludo = Saludar(1.0);
    expect(saludo).toBe("error");
  });

  test("Deberia recibir un id", () => {
    const id = getId();
    expect(id).toMatch(/\d{2}-\d{3}/);
  });

  test("Se invirte correctamente el string", () => {
    const word = reverseString("Hola");
    expect(word).toBe("aloH");
  });

  test("Numero de vocales de Holas es 2", () => {
    const word = countVowels("Hola");
    expect(word).toBe(2);
  });

  test("La mayuscula del primer string es mayuscula", () => {
    const word = capitalizeString("hola");
    expect(word).toBe("Hola");
  });

  test("Saber si una palabra es polimodra", () => {
    const word = Poliword("anita lava la tina");
    expect(word).toBe(true);
  });

  test("Recibir el string después del corte", () => {
    const word = cutString("Hello World", 0, 5);

    expect(word).toBe("Hello");
  });
});
