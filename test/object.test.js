import { describe, test, expect } from "vitest";
import { createStore, nameList } from "./object";

describe("Probando a fondo los objetos", () => {
  test("Agregar un item en el store", () => {
    const store = createStore();
    store.addItem({
      name: "Pera",
      id: 1,
    });
    const fruitList = store.getStore();
    expect(fruitList).toStrictEqual([
      {
        name: "Pera",
        id: 1,
      },
    ]);
  });
  test("Agregar un item en el store", () => {
    const store = createStore();
    store.addItem({
      name: "Alvaro",
      id: 1,
      pais: "mx",
    });
    const itemlist = store.getStore();

    expect(itemlist).toContainEqual({
      name: "Alvaro",
      id: 1,
      pais: "mx",
    });

    expect(itemlist[0]).toEqual({
      name: "Alvaro",
      id: 1,
      pais: "mx",
    });
  });

  test("Deberia de buscar un item por id", () => {
    const store = createStore();
    store.addItem({
      name: "Alvaro",
      id: 1,
      pais: "mx",
    });
    store.addItem({
      name: "Pedro",
      id: 2,
      pais: "mx",
    });
    const itemlist = store.getById(2);
    //este objeto es igal a este
    expect(itemlist).toEqual({
      name: "Pedro",
      id: 2,
      pais: "mx",
    });
    //este objeto contiene esto
    expect(itemlist).toMatchObject({
      name: "Pedro",
    });
    //este obejto contiene esta propiedad
    expect(itemlist).toHaveProperty("id", 2);
  });

  test("Deberia de buscar un item por id y no lo encuentra", () => {
    const store = createStore();
    store.addItem({
      name: "Alvaro",
      id: 1,
      pais: "mx",
    });
    store.addItem({
      name: "Pedro",
      id: 2,
      pais: "mx",
    });
    const itemlist = store.getById(3);

    expect(itemlist).toBeUndefined();
  });

  test("Validar la propiedad de un objeto", () => {
    const list = nameList();
    list.addName({
      name: "Jhon",
      age: 30,
    });

    const nameListSearch = list.getList();
    const propertySearch = nameListSearch[0]["name"];

    expect(propertySearch).toContain("Jhon");
  });
  test("Validar la propiedad de un objeto", () => {
    const list = nameList();
    list.addName({});

    const emptyList = list.getList();

    const result = Object.entries(emptyList[0]).length === 0;
    expect(result).toBe(true);
  });

  test("Merger objetos", () => {
    const list = nameList();
    list.addName({
      name: "Jhon",
    });
    list.addName({
      age: 30,
    });
    const objectList = list.getList();
    const mergeObject = Object.assign(objectList[0], objectList[1]);

    expect(mergeObject).toEqual({ name: "Jhon", age: 30 });
  });

  test("Obtener las keys del objeto", () => {
    const list = nameList();
    list.addName({
      name: "Jhon",
      age: 30,
    });

    const objectList = list.getList();
    const objectKeys = Object.keys(objectList[0], objectList[1]);
    console.log(objectKeys);
    expect(objectKeys).toEqual(["name", "age"]);
  });

  test("Validar la propiedad especifica de un objeto", () => {
    const list = nameList();
    list.addName({
      name: "Jhon",
      age: 30,
    });

    const nameListSearch = list.getList();
    const propertySearch = nameListSearch[0]["age"] ? true : false;

    expect(propertySearch).toEqual(true);
  });
});

//ejercicios https://immense-vise-049.notion.site/Ejercicios-Taller-Unit-Test-63073947cab447e6af82c677120babe3
