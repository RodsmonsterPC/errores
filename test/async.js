//https://rickandmortyapi.com/api/character/?name=rick
import axios from "axios";

const getData = () => {
  return "Alvaro";
};

export const getDataCallback = (callback) => {
  //peticion a una api
  const name = "Alvaro";

  setTimeout(() => {
    callback(name);
  }, 3000);
};

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola soy Rodolfo");
    }, 3000);
  });
};

export const getCharacters = async () => {
  const { data } = await axios("https://rickandmortyapi.com/api/character");
  return data;
};

export const getCharactersId = async (id) => {
  const { data } = await axios(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};

export const getCharactersName = async (name) => {
  const { data } = await axios(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return data;
};
