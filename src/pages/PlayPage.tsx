import { Link, useParams } from "react-router-dom";
import { GamePlayer } from "@/components/games/GamePlayer";
import { getGame } from "@/data/games";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import styles from "./PlayPage.module.css";

export function PlayPage() {
  const { gameId = "" } = useParams();
  const game = getGame(gameId);
  useDocumentTitle(game ? `${game.name} — Playbox` : "Game not found — Playbox");

  if (!game) {
    return (
      <div className={styles.missing}>
        <h1>That game isn’t here.</h1>
        <p>Check the name, or go back to the full list.</p>
        <Link to="/">All games</Link>
      </div>
    );
  }

  return <GamePlayer game={game} />;
}
