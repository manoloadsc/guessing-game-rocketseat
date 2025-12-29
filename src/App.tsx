import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LetterUsed } from "./components/LetterUsed";

export default function App() {
  function handleRestartGame() {
    alert("Jogo reiniciado!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />
        <Tip tip="Tente adivinhar o número entre 1 e 100!" />
        <div className={styles.word}>
          <Letter value="A" />
          <Letter value="P" />
          <Letter value="P" />
          <Letter value="L" />
          <Letter value="E" />
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} />
          <Button title="Enviar" />
        </div>

        <LetterUsed />
      </main>
    </div>
  );
}
