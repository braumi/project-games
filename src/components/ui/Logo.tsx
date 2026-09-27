import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`${styles.logo} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="11" rx="5.5" fill="#fff" />
        <circle cx="8.5" cy="12.5" r="1.6" fill="#f2542d" />
        <rect
          x="7.7"
          y="10.3"
          width="1.6"
          height="4.4"
          rx=".8"
          fill="#f2542d"
          transform="rotate(90 8.5 12.5)"
        />
        <circle cx="15.2" cy="11.4" r="1.1" fill="#0e9f8a" />
        <circle cx="17" cy="13.6" r="1.1" fill="#0e9f8a" />
      </svg>
    </div>
  );
}
