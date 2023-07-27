export type LetterState =
  | "neutral"
  | "in-correct"
  | "not-in"
  | "in-wrong"
  | "empty";

export const LetterBox = ({
  letter,
  state = "neutral",
}: {
  letter: string;
  state: LetterState;
}) => {
  const getBackgroundColor = (state: string) => {
    switch (state) {
      case "neutral":
        return "border";
      case "in-correct":
        return "bg-green";
      case "not-in":
        return "bg-dark-grey";
      case "in-wrong":
        return "bg-yellow";
      case "empty":
        return "bg-grey dark:bg-card-bg-grey";
      default:
        return "bg-light-grey";
    }
  };
  return (
    <div
      className={
        "m-1 rounded-md text-4xl font-bold flex items-center justify-center w-20 h-20 dark:text-white " +
        getBackgroundColor(state)
      }
    >
      {letter}
    </div>
  );
};
