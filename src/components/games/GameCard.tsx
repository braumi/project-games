import { Link } from "react-router-dom";
import type { Game } from "@/data/games";
import { useHighScore } from "@/hooks/useHighScore";
import { GameThumb } from "./GameThumb";
import styles from "./GameCard.module.css";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const best = useHighScore(game.storeId);

  return (
    <Link to={`/play/${game.id}`} className={styles.card} aria-label={`Play ${game.name}`}>
      <div className={styles.media}>
        <GameThumb src={game.thumb} name={game.name} landscape={game.landscape} />
        {game.isNew ? <span className={styles.badge}>New</span> : null}
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h2>{game.name}</h2>
          <span className={styles.cat}>{game.category}</span>
        </div>
        <p>{game.description}</p>
        <div className={styles.best}>
          {best != null ? (
            <>
              Your best: <b>{best}</b>
            </>
          ) : (
            "Not played yet"
          )}
        </div>
      </div>
    </Link>
  );
}
