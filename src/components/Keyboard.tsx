import { Key } from "./Key";
import Backspace from "../assets/backspace.svg";
import { keyboardKeys } from "../data/keyboardKeys";

export const Keyboard = () => {
  return (
    <div className="bg-light-grey rounded-lg p-5 w-1/2 flex justify-center m-auto">
      <div className="flex-col">
        <div className="flex ml-8">
          {keyboardKeys.slice(0, 10).map((key) => (
            <Key letter={key} />
          ))}
        </div>
        <div className="flex ml-12">
          {keyboardKeys.slice(10, 20).map((key) => (
            <Key letter={key} />
          ))}
        </div>
        <div className="flex">
          {keyboardKeys.slice(20, 29).map((key) => {
            return <Key letter={key === "BACKSPACE" ? <Backspace /> : key} />;
          })}
        </div>
      </div>
    </div>
  );
};
