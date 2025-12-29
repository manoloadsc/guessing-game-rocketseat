import styles from "./styles.module.css";
import React from "react";

type InputProps = React.ComponentProps<"input">;

export function Input({ ...props }: InputProps) {
  return <input type="text" {...props} className={styles.input} />;
}
