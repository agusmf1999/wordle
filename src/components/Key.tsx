import { PropsWithChildren } from "react";

export const Key = ({
  letter,
  ...props
}: PropsWithChildren<{ letter: string | JSX.Element }>) => {
  return (
    <button
      {...props}
      className="m-1 px-4 rounded-md text-lg font-bold flex items-center justify-center w-fit h-12 bg-grey text-black-grey hover:bg-dark-grey hover:text-white"
    >
      {letter}
    </button>
  );
};
