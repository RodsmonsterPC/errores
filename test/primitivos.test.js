import { describe, expect, test } from "vitest";

const getValue = (exp) => {
  switch (exp) {
    case "definido": {
      return {};
    }
    case "indefinido": {
      return undefined;
    }
    case "verdadero": {
      return true;
    }
    case "false": {
      return false;
    }
    default: {
      return null;
    }
  }
};

describe("prueba con los primitivos", () => {
  test("Deberia ser un valor definido", () => {
    expect(getValue("definido")).toBeDefined();
  });

  test("Deberia ser un valor null", () => {
    expect(getValue()).toBeNull();
  });

  test("Deberia ser un valor verdadero", () => {
    expect(getValue("verdadero")).toBeTruthy();
  });

  test("Deberia ser falso", () => {
    expect(getValue("false")).toBeFalsy();
  });

  test("Deberia ser NaN", () => {
    expect(NaN).toBeNaN();
  });
});
