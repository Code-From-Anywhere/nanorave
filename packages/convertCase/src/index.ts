#!/usr/bin/env node

export type Casing =
  //camelCase
  | "camel"
  //PascalCase
  | "pascal"
  //snake_case
  | "snake"
  //kebab-case
  | "kebab"
  //CAPITAL_CASE
  | "capital"
  //Human case
  | "human";

const splitCasingDelimiters = (word: string): string[] => {
  const letters = word.split("");
  const allWords = letters.reduce(
    (words, letter) => {
      //get the last word, we know it's always defined because of the initial value of the reduce
      const lastWord = words.pop()!;
      //let's also get the last letter
      const lastLetter = lastWord.substring(-1);
      const lastLetterIsLowercase = lastLetter.toUpperCase() !== lastLetter;
      const letterIsUppercase = letter.toUpperCase() === letter;
      const createNewWord = lastLetterIsLowercase && letterIsUppercase;
      const newSequence = createNewWord
        ? [lastWord, letter]
        : [`${lastWord}${letter}`];
      const newWords = words.concat(newSequence);
      return newWords;
    },
    [""]
  );

  return allWords;
  // if it was lowercase but it became upper, it's a new word
};

const nonCasingDelimiters = /[\s,._-]+/; //space, comma, dot, underscore, dash

const getDelimiter = (target: Casing) => {
  if (target === "capital") return "_";
  if (target === "human") return " ";
  if (target === "kebab") return "-";
  if (target === "snake") return "_";
  return "";
};

const capitaliseFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase().concat(word.substring(1));
};

const convertToTargetCasing = (word: string, index: number, target: Casing) => {
  if (target === "capital") return word.toUpperCase();
  if (target === "kebab" || target === "snake") return word.toLowerCase();
  if (target === "pascal") return capitaliseFirstLetter(word);
  if (target === "camel")
    return index === 0 ? word.toLowerCase() : capitaliseFirstLetter(word);
  return index === 0 ? capitaliseFirstLetter(word) : word.toLowerCase();
};

/**
 *
 */
export const convertCase = (text: string, target: Casing) =>
  text
    .split(nonCasingDelimiters)
    .reduce(
      (all, word) => all.concat(splitCasingDelimiters(word)),
      [] as string[]
    )
    .map((word, index) => convertToTargetCasing(word, index, target))
    .join(getDelimiter(target));

export const camelCase = (text: string) => convertCase(text, "camel");
export const pascalCase = (text: string) => convertCase(text, "pascal");
export const snakeCase = (text: string) => convertCase(text, "snake");
export const kebabCase = (text: string) => convertCase(text, "kebab");
export const capitalCase = (text: string) => convertCase(text, "capital");
export const humanCase = (text: string) => convertCase(text, "human");

export default convertCase;

convertCase.config = {
  draft: false,
  generateCli: true,
  price: 0,
};

export const test = () => {
  const testCases = [
    "Handige harry",
    "handigeHarry",
    "HandigeHarry",
    "handige-harry",
    "handige_harry",
    "HANDIGE_HARRY",
  ];

  testCases.forEach((word) => {
    console.log({
      word,
      camel: camelCase(word),
      snake: snakeCase(word),
      kebab: kebabCase(word),
      pascal: pascalCase(word),
      capital: capitalCase(word),
      human: humanCase(word),
    });
  });
};
