import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import styles from "./SiteShell.module.css";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className={styles.wrap}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
