import { useState, useEffect } from "react";

import { HowToPlayModal, StatisticsModal } from "./";
import { Keyboard, SwitchTheme, Modal, Words } from "../components";
import {
  ChartBarSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { words } from "../data/words";

const fiveLetterWordsList = words.filter((word) => word.length === 5);

export const Wordle = () => {
  const [showModalHowToPlay, setShowModalHowToPlay] = useState(false);
  const [showModalStatistics, setShowModalStatistics] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [timesPlayed, setTimesPlayed] = useState(0);
  const [victoryCount, setVictoryCount] = useState(0);
  const [word, setWord] = useState("");
  const [previousWord, setPreviousWord] = useState("");

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
    setWord(word);
  };

  const getTime = () => {
    setSeconds(seconds - 1);
    if (minutes === 0 && seconds === 1) {
      setMinutes(5);
      setSeconds(0);
      setPreviousWord(word.toUpperCase());
      setShowModalStatistics(true);
      setTimesPlayed((value) => value + 1);
      getNewWord();
    }
    if (seconds === 0 && minutes !== 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    }
  };

  useEffect(() => {
    if (letters.length === 25) {
      setShowModalStatistics(true);
      setTimesPlayed((value) => value + 1);
      setLetters([]);
    }
  }, [letters]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const alreadyVisit = localStorage.getItem("alreadyVisit");
    if (alreadyVisit === null) {
      setShowModalHowToPlay(true);
      localStorage.setItem("alreadyVisit", "true");
    }
    getNewWord();
  }, []);

  return (
    <div>
      <div className="p-6 mx-56 my-16 bg-light-grey rounded-xl m-5 flex justify-between items-center text-black dark:text-white dark:bg-card-bg-grey">
        <Modal
          title="Cómo jugar"
          isOpen={showModalHowToPlay}
          onClose={() => setShowModalHowToPlay(false)}
          closeButtonText="¡Jugar!"
        >
          <HowToPlayModal />
        </Modal>
        <Modal
          title="Estadísticas"
          isOpen={showModalStatistics}
          onClose={() => {
            setShowModalStatistics(false);
            setPreviousWord("");
          }}
          closeButtonText="Aceptar"
        >
          <StatisticsModal
            timesPlayed={timesPlayed}
            victoryCount={victoryCount}
            timer={{ minutes, seconds }}
            word={previousWord !== "" ? previousWord : undefined}
          />
        </Modal>

        <button onClick={() => setShowModalHowToPlay(true)}>
          <QuestionMarkCircleIcon className="text-darkest-grey dark:text-white w-9" />
        </button>

        <div className="font-semibold text-5xl tracking-widest uppercase">
          Wordle
        </div>

        <div className="flex justify-between items-center">
          <button onClick={() => setShowModalStatistics(true)} className="mr-2">
            <ChartBarSquareIcon className="text-darkest-grey dark:text-white w-9" />
          </button>

          <SwitchTheme />
        </div>
      </div>
      <Words
        letters={letters}
        word={word}
        onVictory={() => {
          setTimesPlayed((value) => value + 1);
          setVictoryCount((value) => value + 1);
          setShowModalStatistics(true);
          setLetters([]);
          getNewWord();
        }}
      />
      <Keyboard
        onType={(letter) => {
          if (letters.length < 25) setLetters([...letters, letter]);
        }}
      />
    </div>
  );
};
