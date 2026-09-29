export const CATEGORIES = ["All", "Puzzle", "Cards", "Board", "Sports", "Arcade"] as const;

export type Category = (typeof CATEGORIES)[number];
export type GameCategory = Exclude<Category, "All">;

export type HowPart = string | { em: string };

export interface Game {
  id: string;
  file: string;
  thumb: string;
  name: string;
  category: GameCategory;
  landscape: boolean;
  storeId: string;
  description: string;
  how: HowPart[];
  featured?: boolean;
  isNew?: boolean;
}

export const GAMES: Game[] = [
  {
    id: "cannonfall",
    file: "cannonfall/index.html",
    thumb: "/images/games/cannonfall.png",
    name: "Cannonfall",
    category: "Arcade",
    landscape: true,
    storeId: "cannonfall",
    featured: true,
    isNew: true,
    description: "Aim the cannon and knock every block off the pedestal. Combos, stars, and a thousand levels.",
    how: [
      { em: "Aim" },
      " with the pointer, then ",
      { em: "click" },
      " or press ",
      { em: "Space" },
      " to fire.",
    ],
  },
  {
    id: "2048",
    file: "2048/index.html",
    thumb: "/images/games/2048.png",
    name: "2048",
    category: "Puzzle",
    landscape: false,
    storeId: "classic-2048",
    description: "Slide the tiles and merge equal numbers until you reach 2048.",
    how: [{ em: "Arrows / WASD" }, " or ", { em: "swipe" }, " to slide all tiles."],
  },
  {
    id: "key-peaks-solitaire",
    file: "key-peaks-solitaire/index.html",
    thumb: "/images/games/key-peaks-solitaire.png",
    name: "Key Peaks Solitaire",
    category: "Cards",
    landscape: true,
    storeId: "key-peaks-solitaire",
    description: "Clear seven columns by playing cards one higher or lower. Find the keys to open more piles.",
    how: [
      { em: "Tap" },
      " a front card one higher or lower than a pile. ",
      { em: "Tap the deck" },
      " to deal. ",
      { em: "Joker" },
      " when stuck. Keys: ←/→ column, ↑/Enter play, ↓ deal, J joker, 1–3 pile.",
    ],
  },
  {
    id: "marble-chain",
    file: "marble-chain/index.html",
    thumb: "/images/games/marble-chain.png",
    name: "Marble Chain",
    category: "Puzzle",
    landscape: true,
    storeId: "marble-chain",
    description: "Shoot marbles into the rolling chain. Three of a colour pop before the chain reaches the hole.",
    how: [
      { em: "Aim" },
      " with the pointer and ",
      { em: "click" },
      " to shoot. Tap the idol or press ",
      { em: "Space" },
      " to swap marbles.",
    ],
  },
  {
    id: "halma",
    file: "halma/index.html",
    thumb: "/images/games/halma.png",
    name: "Halma",
    category: "Board",
    landscape: false,
    storeId: "halma",
    description: "The classic jumping race. Move all ten pieces into the far camp before the computer does.",
    how: [
      { em: "Tap a piece" },
      ", then a green dot. Chain jumps over any piece. Leave your camp by move 40.",
    ],
  },
  {
    id: "hoop-drop",
    file: "hoop-drop/index.html",
    thumb: "/images/games/hoop-drop.png",
    name: "Hoop Drop",
    category: "Sports",
    landscape: false,
    storeId: "hoop-drop",
    description: "Place and tilt the paddles, then drop the balls and guide them into the basket.",
    how: [
      { em: "Drag" },
      " a paddle to move it, drag its ",
      { em: "handle" },
      " to tilt, then tap ",
      { em: "Drop" },
      ".",
    ],
  },
  {
    id: "goal-puzzle",
    file: "goal-puzzle/index.html",
    thumb: "/images/games/goal-puzzle.png",
    name: "Goal Puzzle",
    category: "Sports",
    landscape: false,
    storeId: "goal-puzzle",
    description: "Top-down football puzzles. Bank shots past walls and defenders into the net.",
    how: [{ em: "Press the ball, drag back, release" }, " to shoot. Arrows aim, Space shoots."],
  },
  {
    id: "star-kick",
    file: "star-kick/index.html",
    thumb: "/images/games/star-kick.png",
    name: "Star Kick",
    category: "Sports",
    landscape: true,
    storeId: "star-kick",
    description: "Kick through at least one star in the air, then into the goal. Portals, boxes and moving walls.",
    how: [
      { em: "Press and hold" },
      ", aim from the ball toward the pointer, ",
      { em: "release" },
      " to kick. A goal only counts after a star.",
    ],
  },
  {
    id: "subway-flap",
    file: "subway-flap/index.html",
    thumb: "/images/games/subway-flap.png",
    name: "Subway Flap",
    category: "Arcade",
    landscape: false,
    storeId: "subway-flap",
    description: "One-touch flying through the tunnel pillars. How far can you get?",
    how: [{ em: "Tap" }, ", click, Space or ↑ to flap."],
  },
  {
    id: "star-bouncer",
    file: "star-bouncer/index.html",
    thumb: "/images/games/star-bouncer.png",
    name: "Star Bouncer",
    category: "Arcade",
    landscape: true,
    storeId: "star-bouncer",
    description: "The ball keeps rising. Tap to drop it, dodge the spikes and grab the stars.",
    how: [{ em: "Tap" }, ", Space or ↓ to send the ball down. Don’t let it fly off the top."],
  },
];

export function getGame(id: string): Game | undefined {
  return GAMES.find((game) => game.id === id);
}

export function featuredGame(): Game | undefined {
  return GAMES.find((game) => game.featured);
}

export function filterGames(category: Category): Game[] {
  if (category === "All") return GAMES;
  return GAMES.filter((game) => game.category === category);
}
