import Logo from "../../assets/logo.png";
import RefreshIcon from "../../assets/restart.svg";
import styles from "./styles.module.css";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>
        <button type="button" onClick={onRestart}>
          <img src={RefreshIcon} alt="Reiniciar jogo" />
        </button>
      </header>
    </div>
  );
}
