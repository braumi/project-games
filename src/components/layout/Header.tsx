import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import styles from "./Header.module.css";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.top}>
      <div>
        <Link to="/" className={styles.brand} aria-label="Playbox home">
          <Logo />
          <h1>Playbox</h1>
        </Link>
        <p className={styles.tag}>
          Eleven free browser games. No installs, no ads, your best scores saved on this device.
        </p>
      </div>
      {children}
    </header>
  );
}
