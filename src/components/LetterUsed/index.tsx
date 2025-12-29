import styles from "./styles.module.css";
import { Letter } from "../Letter/index";

export function LetterUsed() {
  return (
    <div className={styles.letterUsed}>
      <h5>Letras Utilizadas</h5>
      <div>
        <Letter value="A" size="small" color="wrong" />
        <Letter value="B" size="small" color="corret" />
        <Letter value="C" size="small" />
      </div>
    </div>
  );
}
