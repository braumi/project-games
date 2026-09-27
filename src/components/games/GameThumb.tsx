import styles from "./GameThumb.module.css";

interface GameThumbProps {
  src: string;
  name: string;
  landscape: boolean;
}

export function GameThumb({ src, name, landscape }: GameThumbProps) {
  return (
    <div className={styles.wrap}>
      <img
        className={`${styles.thumb} ${landscape ? "" : styles.portrait}`.trim()}
        src={src}
        alt=""
        loading="lazy"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}
