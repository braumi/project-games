export interface HighScore {
  score: number;
  at?: number;
}

function readList(storeId: string): HighScore[] {
  try {
    const raw = localStorage.getItem(`${storeId}:highscores`);
    const list = raw ? (JSON.parse(raw) as HighScore[]) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function getBestScore(storeId: string): number | null {
  const list = readList(storeId);
  if (!list.length) return null;
  const first = list[0]?.score;
  return typeof first === "number" ? first : null;
}

export function readFilter(): string {
  try {
    return localStorage.getItem("playbox:filter") || "All";
  } catch {
    return "All";
  }
}

export function writeFilter(value: string): void {
  try {
    localStorage.setItem("playbox:filter", value);
  } catch {
    /* private mode */
  }
}
