import { useState } from "react";
import { Switch } from "@headlessui/react";

export const SwitchTheme = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
  return (
    <Switch
      checked={darkThemeEnabled}
      onChange={setDarkThemeEnabled}
      className={`${
        darkThemeEnabled
          ? "bg-gradient-to-t from-[#AFCAFF] to-[#2B4485] shadow-inner shadow-dark-grey"
          : "bg-gradient-to-t from-[#FFEEB2] to-[#66FFED] "
      }
          relative inline-flex items-center h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full transition-all duration-200 ease-in-out focus:outline-none`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${
          darkThemeEnabled
            ? "translate-x-1 pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-gradient-to-b from-[#CEE5FF] to-[#F1F9FF] shadow-md shadow-dark-grey ring-0 border-4 border-[#D6E9FF]"
            : "translate-x-9 pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-gradient-to-b from-[#FFBF24] to-[#F4924B] shadow-md shadow-dark-grey ring-0 border-4 border-[#FF9255] "
        }
             transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
