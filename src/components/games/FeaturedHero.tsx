import { Link } from "react-router-dom";
import type { Game } from "@/data/games";
import styles from "./FeaturedHero.module.css";

interface FeaturedHeroProps {
  game: Game;
}

export function FeaturedHero({ game }: FeaturedHeroProps) {
  return (
    <Link to={`/play/${game.id}`} className={styles.hero} aria-label={`Play ${game.name}, new game`}>
      <img
        className={styles.art}
        src={game.thumb}
        alt=""
        style={game.heroPosition ? { objectPosition: game.heroPosition } : undefined}
      />
      <div className={styles.copy}>
        <span className={styles.badge}>New</span>
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <span className={styles.cta}>Play now</span>
      </div>
    </Link>
  );
}
