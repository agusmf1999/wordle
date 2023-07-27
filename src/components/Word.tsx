import { getArrayFromString } from "../helpers/getArrayFromString";
import { LetterBox } from "./LetterBox";

export const Word = ({
  word = "",
  letterStates = [],
}: {
  word: string;
  letterStates: string[];
}) => {
  return (
    <div className="flex justify-center">
      {getArrayFromString(word).map((letter: string) => {
        return <LetterBox letter={letter} />;
      })}
    </div>
  );
};
