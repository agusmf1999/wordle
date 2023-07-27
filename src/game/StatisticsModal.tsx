export const StatisticsModal = ({
  timesPlayed = 0,
  victoryCount = 0,
  timer,
  word,
}: {
  timesPlayed: number;
  victoryCount: number;
  timer: { minutes: number; seconds: number };
  word?: string;
}) => {
  return (
    <div className="mt-4 font-normal text-lg w-3/4 flex flex-col items-center">
      <div className="flex flex-row justify-between w-full mb-9">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{timesPlayed}</span>
          <span>Jugadas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{victoryCount}</span>
          <span>Victorias</span>
        </div>
      </div>
      {word && (
        <p className="mb-6">
          La palabra era <b className="uppercase">{word}</b>
        </p>
      )}
      <p className="uppercase mb-2">Siguiente palabra</p>
      <span className="mb-6 font-bold">
        {"0" +
          timer.minutes +
          ":" +
          (timer.seconds.toString().length === 1 ? "0" : "") +
          timer.seconds}
      </span>
    </div>
  );
};
