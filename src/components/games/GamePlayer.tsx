import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import type { Game, HowPart } from "@/data/games";
import styles from "./GamePlayer.module.css";

interface GamePlayerProps {
  game: Game;
}

function HowTo({ parts }: { parts: HowPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? part : <b key={index}>{part.em}</b>,
      )}
    </>
  );
}

export function GamePlayer({ game }: GamePlayerProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);

  const fit = useCallback(() => {
    const stage = stageRef.current;
    const frame = frameRef.current;
    if (!stage || !frame) return;
    const w = stage.clientWidth - 24;
    const h = stage.clientHeight - 8;
    const ratio = game.landscape ? 16 / 9 : 9 / 16;
    let fw = w;
    let fh = w / ratio;
    if (fh > h) {
      fh = h;
      fw = h * ratio;
    }
    frame.style.width = `${Math.floor(fw)}px`;
    frame.style.height = `${Math.floor(fh)}px`;
  }, [game.landscape]);

  useEffect(() => {
    fit();
    const stage = stageRef.current;
    const observer = stage ? new ResizeObserver(fit) : null;
    if (stage && observer) observer.observe(stage);
    window.addEventListener("resize", fit);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [fit]);

  useEffect(() => {
    frameRef.current?.focus();
  }, [game.id]);

  const requestFullscreen = () => {
    const frame = frameRef.current;
    if (!frame) return;
    const req = frame.requestFullscreen?.bind(frame);
    if (req) void Promise.resolve(req()).catch(() => undefined);
  };

  return (
    <section className={styles.player} aria-labelledby="player-title">
      <div className={styles.bar}>
        <Link to="/" className={styles.back}>
          ← All games
        </Link>
        <h1 id="player-title">{game.name}</h1>
        <Button variant="primary" type="button" onClick={requestFullscreen}>
          Fullscreen
        </Button>
      </div>
      <div className={styles.stage} ref={stageRef}>
        <iframe
          ref={frameRef}
          className={styles.frame}
          title={game.name}
          src={`/games/${game.file}`}
          allow="fullscreen; autoplay"
        />
      </div>
      <p className={styles.how}>
        <HowTo parts={game.how} />
      </p>
    </section>
  );
}
