import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LetterUsedProps } from "./components/LetterUsed";
import { WORDS, type Challenge } from "./utils/words";
import { useEffect, useState } from "react";

export default function App() {
  const ATTEMPTS_MARGIN = 5;

  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);

  function handleRestartGame() {
    const isConfirmed = window.confirm("Deseja reiniciar o jogo?");
    if (isConfirmed) {
      startGame();
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);

    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setScore(0);
    setLetter("");

    setLetterUsed([]);
  }

  function HandleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Por favor, insira uma letra!");
    }

    const value = letter.toUpperCase();

    const exists = letterUsed.find(
      (used) => used.value.toLocaleUpperCase() === value
    );

    if (exists) {
      setLetter("");
      return alert("Você já tentou essa letra!");
    }

    const hits = challenge.word
      .toLocaleUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetterUsed((prevState) => [...prevState, { value, correct }]);

    setScore(currentScore);

    // Limpar o input após adicionar à lista
    setLetter("");
  }

  function endGame(message: string) {
    alert(message);
    startGame();
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return;
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns! Você acertou a palavra!");
      }

      const attempLimit = challenge.word.length + ATTEMPTS_MARGIN;

      if (letterUsed.length === attempLimit) {
        return endGame(
          "Fim de jogo! Você excedeu o número máximo de tentativas."
        );
      }
    }, 200);
  }, [score, letterUsed.length, challenge]);

  if (!challenge) {
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={letterUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const lettersUsed = letterUsed.find(
              (used) => used.value.toUpperCase() == letter.toUpperCase()
            );
            return (
              <Letter
                key={index}
                value={lettersUsed?.value || ""}
                color={lettersUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input
            autoFocus
            placeholder="?"
            value={letter}
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Enviar" onClick={HandleConfirm} />
        </div>

        <div>
          <LettersUsed data={letterUsed} />
        </div>
      </main>
    </div>
  );
}
