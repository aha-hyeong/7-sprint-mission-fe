import { useState } from "react";
import Image from "next/image";
import styles from "./PasswordField.module.css";

export default function PasswordField({
  label = "비밀번호",
  placeholder = "비밀번호를 입력해주세요",
  value,
  onChange,
  onBlur,
  name = "password",
  error,
  required = false,
  id = "password",
  success = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
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
      <div className={styles.passwordWrapper}>
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.input} ${styles.inputPassword} ${error ? styles.error : ""}${
            success ? " " + styles.success : ""
          }`}
          required={required}
          autoComplete="current-password"
        />
        <button
          type="button"
          aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}
          onClick={() => setShowPassword((v) => !v)}
          className={styles.passwordToggle}
          tabIndex={0}
        >
          <Image
            src={showPassword ? "/btn_visibility_on_24px.svg" : "/btn_visibility_off_24px.svg"}
            alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}
            width={24}
            height={24}
          />
        </button>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
