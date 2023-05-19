import { reverse } from "dns";

export const Saludar = (name) => {
  if (typeof name === "number") return "error";
  return `Hola soy ${name}`;
};

export const getId = () => {
  return `44-123`;
};

export const reverseString = (word) => {
  let separateWords = word.split("");

  let reverse = separateWords.reverse();

  let joinWords = reverse.join("");

  return joinWords;
};

export const capitalizeString = (word) => {
  const capitalize = word[0].toUpperCase(0) + word.substring(1);

  return capitalize;
};

export const countVowels = (word) => {
  let string = word;
  let numberVowels = string.match(/[aeiou]/gi).length;
  return numberVowels;
};

export const Poliword = (word) => {
  const RegularExpress = /[\W_]/g;
  const Poliword = word.toLowerCase().replace(RegularExpress, "");

  const checkPoliword = Poliword.split(" ").reverse().join("");

  return Poliword === checkPoliword;
};

export const cutString = (word, value1, value2) => {
  const subString = word.substring(value1, value2);
  return subString;
};
