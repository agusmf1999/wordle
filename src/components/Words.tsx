import { useEffect, useState } from "react";
import { LetterBox, LetterState } from "./LetterBox";

export const Words = ({
  letters,
  word,
  onVictory,
}: {
  letters: string[];
  word: string;
  onVictory: () => void;
}) => {
  const getPossibleWord = () => {
    let possibleWord = "";

    let lettersFragment: string[] = [];
    if (letters.length <= 5) lettersFragment = [...letters].splice(0, 5);
    else if (letters.length > 5 && letters.length < 10)
      lettersFragment = [...letters].splice(5, 10);
    else if (letters.length > 10 && letters.length < 15)
      lettersFragment = [...letters].splice(10, 15);
    else if (letters.length > 15 && letters.length < 20)
      lettersFragment = [...letters].splice(15, 20);
    else if (letters.length > 20 && letters.length < 25)
      lettersFragment = [...letters].splice(20, 25);

    for (let index = 0; index < lettersFragment.length; index++) {
      possibleWord += lettersFragment[index] ? lettersFragment[index] : "";
    }
    return possibleWord;
  };

  const checkIfWon = () => {
    if (letters.length % 5 === 0) {
      const possibleWord = getPossibleWord();
      if (word !== "" && possibleWord === word.toUpperCase()) {
        onVictory();
      }
    }
  };

  const getLetterState = (letter: string): LetterState => {
    const possibleWord = getPossibleWord();

    if (letter === "") return "empty";
    else {
      console.log(letter, word, possibleWord);
      if (
        word.toUpperCase().includes(letter) &&
        possibleWord.indexOf(letter) === word.toUpperCase().indexOf(letter)
      )
        return "in-correct";
      else if (
        word.toUpperCase().includes(letter) &&
        possibleWord.indexOf(letter) !== word.toUpperCase().indexOf(letter)
      )
        return "in-wrong";
      else if (!word.toUpperCase().includes(letter)) return "not-in";
      return "neutral";
    }
  };

  const getLetterBoxes = () => {
    let lettersAux: any[] = [];
    for (let index = 0; index < 25; index++) {
      lettersAux.push(letters[index] ? letters[index] : "");
    }
    return lettersAux;
  };

  useEffect(() => {
    checkIfWon();
  }, [letters]);

  return (
    <div className="letterboxes mb-8">
      {getLetterBoxes().map((letter, index) => (
        <LetterBox
          letter={letter}
          key={index}
          state={getLetterState(letter).toLowerCase()}
        />
      ))}
    </div>
  );
};
