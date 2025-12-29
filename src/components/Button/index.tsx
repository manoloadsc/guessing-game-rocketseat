import styles from "./styles.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button type="button" className={styles.button} {...rest}>
      {title}
    </button>
  );
}
