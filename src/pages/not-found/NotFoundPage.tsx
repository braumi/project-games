import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  useDocumentTitle("Page not found — Playbox");
  return (
    <div className={styles.missing}>
      <h1>Page not found</h1>
      <p>That path doesn’t lead to a game.</p>
      <Link to="/">All games</Link>
    </div>
  );
}
