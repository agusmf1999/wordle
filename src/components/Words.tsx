import { useEffect, useState } from "react";
import { words } from "../data/words";
import { getArrayFromString } from "../helpers/getArrayFromString";
import { LetterBox, LetterState } from "./LetterBox";

const fiveLetterWordsList = words.filter((word) => word.length === 5);

export const Words = ({
  letters,
  timer,
  onVictory,
}: {
  letters: string[];
  timer: { minutes: number; seconds: number };
  onVictory: () => void;
}) => {
  const [word, setWord] = useState("");

  const getNewWord = async () => {
    let word =
      fiveLetterWordsList[
        Math.floor(Math.random() * fiveLetterWordsList.length)
      ];
    word = word.replace(/á/gi, "a");
    word = word.replace(/é/gi, "e");
    word = word.replace(/í/gi, "i");
    word = word.replace(/ó/gi, "o");
    word = word.replace(/ú/gi, "u");
    console.log(word);
    setWord(word);
  };

  const getPossibleWord = () => {
    let possibleWord = "";
    for (let index = 0; index < 5; index++) {
      const letter = [...letters].splice(letters.length - 5, letters.length)[
        index
      ];
      possibleWord += letter;
    }
    return possibleWord;
  };

  const checkIfWon = () => {
    if (letters.length % 5 === 0) {
      const possibleWord = getPossibleWord();
      if (possibleWord === word) {
        console.log("gane");
        onVictory();
        getNewWord();
      }
    }
  };

  const getLetterState = (letter: string): LetterState => {
    const possibleWord = getPossibleWord();
    if (letter === "") return "empty";
    if (
      word.includes(letter) &&
      possibleWord.indexOf(letter) === word.indexOf(letter)
    )
      return "in-correct";
    if (
      word.includes(letter) &&
      possibleWord.indexOf(letter) !== word.indexOf(letter)
    )
      return "in-wrong";
    if (!word.includes(letter)) return "not-in";
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

  useEffect(() => {
    getNewWord();
  }, []);

  useEffect(() => {
    if (timer.seconds === 0 && timer.minutes === 0) {
      getNewWord();
    }
  }, [timer]);

  return (
    <div className="letterboxes mb-8">
      {getLetterBoxes().map((letter, index) => (
        <LetterBox letter={letter} key={index} state={getLetterState(letter)} />
      ))}
    </div>
  );
};
