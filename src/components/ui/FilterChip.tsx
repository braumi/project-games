import styles from "./FilterChip.module.css";

interface FilterChipProps {
  label: string;
  pressed: boolean;
  onClick: () => void;
}

export function FilterChip({ label, pressed, onClick }: FilterChipProps) {
  return (
    <button type="button" className={styles.chip} aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}
