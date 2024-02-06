import { describe, test, expect, it } from "vitest";
import {
  getCharacters,
  getCharactersId,
  getCharactersName,
  getDataCallback,
  getDataPromise,
  getUser,
} from "./async";
describe("Pruebas async", () => {
  it.skip("Prueba con callback", (done) => {
    getDataCallback(() => {
      expect(name).toBe("Alvaro");
      done();
    });
  });

  test.skip("Probando async con promesas", (done) => {
    getDataPromise().then((name) => {
      console.log(name);
      expect(name).toBe("Hola soy Rodolfo");
      done();
    });
  });
  test("Debo obtener 20 personajes", async () => {
    const res = await getCharacters();
    expect(res.results).toHaveLength(20);
  });

  test("Obtener personaje por Id numero 5", async () => {
    const res = await getCharactersId(5);
    expect(res.name).toEqual("Jerry Smith");
  });

  test("Obtener personaje por nombre", async () => {
    const nameCharacter = "Rick Sanchez";

    const res = await getCharactersName(nameCharacter);

    expect(res.results).toHaveLength(4);
  });
});
