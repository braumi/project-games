import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  children?: ReactNode;
}

export function SiteHeader({ children }: SiteHeaderProps) {
  return (
    <header className={styles.top}>
      <div>
        <Link to="/" className={styles.brand} aria-label="Playbox home">
          <Logo />
          <h1>Playbox</h1>
        </Link>
        <p className={styles.tag}>
          Nine free browser games. No installs, no ads, your best scores saved on this device.
        </p>
      </div>
      {children}
    </header>
  );
}
