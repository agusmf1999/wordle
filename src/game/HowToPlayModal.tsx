import { LetterBox } from "../components/LetterBox";

export const HowToPlayModal = () => {
  return (
    <div className="mt-4 font-normal text-lg">
      <p className="mb-3">Adivina la palabra oculta en cinco intentos.</p>
      <p className="mb-3">
        {" "}
        Cada intento debe ser una palabra válida de 5 letras.
      </p>
      <p className="mb-3">
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <h3 className="font-bold mb-3">Ejemplos</h3>
      <div className="flex justify-center mb-3">
        <LetterBox letter="G" state="in-correct" />
        <LetterBox letter="A" />
        <LetterBox letter="T" />
        <LetterBox letter="O" />
        <LetterBox letter="S" />
      </div>
      <p className="mb-3">
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>
      <div className="flex justify-center mb-3">
        <LetterBox letter="V" />
        <LetterBox letter="O" />
        <LetterBox letter="C" state="in-wrong" />
        <LetterBox letter="A" />
        <LetterBox letter="L" />
      </div>
      <p className="mb-3">
        La letra <b>C</b> está en la palabra pero en la posición incorrecta.
      </p>
      <div className="flex justify-center mb-3">
        <LetterBox letter="C" />
        <LetterBox letter="A" />
        <LetterBox letter="N" />
        <LetterBox letter="T" />
        <LetterBox letter="O" state="not-in" />
      </div>
      <p>
        La letra <b>O</b> no está en la palabra.
      </p>
      <p className="mt-8">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
      <p className="text-center mb-8 mt-8">
        ¡Una palabra nueva cada 5 minutos!
      </p>
    </div>
  );
};
