import styles from "./styles.module.css";

type LetterProps = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "corret" | "wrong";
};

export function Letter({
  value = "",
  size = "default",
  color = "default",
}: LetterProps) {
  return (
    <div
      className={`
      ${styles.letter}
      ${size === "small" && styles.letterSmall}
      ${color === "corret" && styles.letterCorrect}
      ${color === "wrong" && styles.letterWrong}`}
    >
      <span>{value}</span>
    </div>
  );
}
