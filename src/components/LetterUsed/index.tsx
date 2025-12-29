import styles from "./styles.module.css";
import { Letter } from "../Letter/index";

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.letterUsed}>
      <h5>Letras Utilizadas</h5>
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
