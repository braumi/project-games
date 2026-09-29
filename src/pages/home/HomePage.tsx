import { useMemo, useState } from "react";
import { FeaturedHero } from "@/components/games/FeaturedHero";
import { GameGrid } from "@/components/games/GameGrid";
import { Header } from "@/components/layout/Header";
import { FilterChip } from "@/components/ui/FilterChip";
import { CATEGORIES, featuredGame, filterGames } from "@/data/games";
import type { Category } from "@/data/games";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { readFilter, writeFilter } from "@/lib/storage";
import styles from "./HomePage.module.css";

function initialCategory(): Category {
  const saved = readFilter();
  return (CATEGORIES as readonly string[]).includes(saved) ? (saved as Category) : "All";
}

export function HomePage() {
  useDocumentTitle("Playbox Arcade");
  const [category, setCategory] = useState<Category>(initialCategory);
  const games = useMemo(() => filterGames(category), [category]);
  const featured = featuredGame();

  const choose = (next: Category) => {
    setCategory(next);
    writeFilter(next);
  };

  return (
    <>
      <Header>
        <div className={styles.filters} role="group" aria-label="Filter games by category">
          {CATEGORIES.map((item) => (
            <FilterChip
              key={item}
              label={item}
              pressed={item === category}
              onClick={() => choose(item)}
            />
          ))}
        </div>
      </Header>
      {featured && category === "All" ? <FeaturedHero game={featured} /> : null}
      <GameGrid games={games} />
    </>
  );
}
