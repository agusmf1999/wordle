import { PropsWithChildren } from "react";

export const Key = ({
  letter,
  className = "",
  onClick,
  ...props
}: PropsWithChildren<{
  letter: string | JSX.Element;
  className?: string;
  onClick?: () => void;
}>) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        "m-1 px-4 rounded-md text-lg font-bold flex items-center justify-center w-fit h-12 bg-grey dark:bg-opaque-blue dark:text-white text-black-grey dark:hover:bg-opaque-blue/75 dark:hover:text-white/75 dark:hover:text- hover:bg-dark-grey hover:text-white" +
        " " +
        className
      }
    >
      {letter}
    </button>
  );
};
