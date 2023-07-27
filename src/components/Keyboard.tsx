import { Key } from "./Key";
import { keyboardKeys } from "../data/keyboardKeys";
import { BackspaceIcon } from "@heroicons/react/24/outline";

export const Keyboard = () => {
  return (
    <div className="bg-light-grey dark:bg-card-bg-grey rounded-lg p-5 w-fit flex justify-center m-auto">
      <div className="flex-col">
        <div className="flex ml-8">
          {keyboardKeys.slice(0, 10).map((key) => (
            <Key key={key} letter={key} />
          ))}
        </div>
        <div className="flex ml-12">
          {keyboardKeys.slice(10, 20).map((key) => (
            <Key key={key} letter={key} />
          ))}
        </div>
        <div className="flex">
          {keyboardKeys.slice(20, 29).map((key) => {
            return (
              <Key
                key={key}
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
