import { Key } from "./Key";
import { keyboardKeys } from "../data/keyboardKeys";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export const Keyboard = ({ onType }: { onType: (letter: string) => void }) => {
  const onKeyPress = (event: any) => {
    let key: string = event.key;
    key = key.toUpperCase();
    if (keyboardKeys.includes(key)) onType(key);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onKeyPress, false);
    };
  }, [onKeyPress, onType]);

  return (
    <div className="bg-light-grey dark:bg-card-bg-grey rounded-lg p-5 w-fit flex justify-center m-auto">
      <div className="flex-col">
        <div className="flex ml-8">
          {keyboardKeys.slice(0, 10).map((key) => (
            <Key onClick={() => onType(key)} key={key} letter={key} />
          ))}
        </div>
        <div className="flex ml-12">
          {keyboardKeys.slice(10, 20).map((key) => (
            <Key key={key} onClick={() => onType(key)} letter={key} />
          ))}
        </div>
        <div className="flex">
          {keyboardKeys.slice(20, 29).map((key) => {
            return (
              <Key
                key={key}
                onClick={() => onType(key)}
                className={key === "BACKSPACE" ? "w-20 px-7" : ""}
                letter={
                  key === "BACKSPACE" ? (
                    <BackspaceIcon className="w-5 dark:text-white  hover:text-white text-black-grey" />
                  ) : (
                    key
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
