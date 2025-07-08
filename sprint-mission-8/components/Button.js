import styles from "./Button.module.css";

export default function Button({ children, type = "button", disabled = false, onClick, className = "" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
