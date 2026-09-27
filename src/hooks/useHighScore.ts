import { useSyncExternalStore } from "react";
import { getBestScore } from "@/lib/storage";

function subscribe(onStoreChange: () => void) {
  const onChange = () => onStoreChange();
  window.addEventListener("storage", onChange);
  window.addEventListener("focus", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("focus", onChange);
  };
}

export function useHighScore(storeId: string): number | null {
  return useSyncExternalStore(
    subscribe,
    () => getBestScore(storeId),
    () => null,
  );
}
