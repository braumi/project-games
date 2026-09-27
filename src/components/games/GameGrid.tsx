import type { Game } from "@/data/games";
import { GameCard } from "./GameCard";
import styles from "./GameGrid.module.css";

interface GameGridProps {
  games: Game[];
}

export function GameGrid({ games }: GameGridProps) {
  if (!games.length) {
    return <p className={styles.empty}>No games in this category.</p>;
  }

  return (
    <div className={styles.grid} aria-live="polite">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
