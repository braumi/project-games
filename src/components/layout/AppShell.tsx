import type { ReactNode } from "react";
import { Footer } from "./Footer";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.wrap}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
