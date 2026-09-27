import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "secondary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
