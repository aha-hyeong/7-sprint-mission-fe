import styles from "./InputField.module.css";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  required = false,
  id,
  success = false,
  className,
  as,
}) {
  const inputClass = `${styles.input} ${error ? styles.error : ""}${success ? " " + styles.success : ""}${
    typeof className === "string" ? ` ${className}` : ""
  }`;
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          required={required}
          rows={8}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          required={required}
        />
      )}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
