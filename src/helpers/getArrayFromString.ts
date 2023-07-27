export const getArrayFromString = (text: string) => {
  let arrayLetters: string[] = [];
  for (let index = 0; index < text.length; index++) {
    arrayLetters.push(text[index]);
  }
  return arrayLetters;
};
