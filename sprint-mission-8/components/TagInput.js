import React, { useState } from "react";
import styles from "./TagInput.module.css";

export default function TagInput({
  value = [],
  onChange,
  maxLength = 10,
  placeholder = "태그를 입력 후 Enter",
  error = "",
  label,
  required = false,
  className = "",
}) {
  const [input, setInput] = useState("");
  const [localError, setLocalError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setLocalError("");
  };

  const handleKeyDown = (e) => {
    // IME 조합 중에는 Enter 처리하지 않음
    if (e.key === "Enter" && !e.nativeEvent.isComposing && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag.length > maxLength) {
        setLocalError(`${maxLength}글자 이내로 입력해주세요`);
        return;
      }
      if (value.includes(newTag)) {
        setLocalError("이미 추가된 태그입니다");
        return;
      }
      onChange([...value, newTag]);
      setInput("");
      setLocalError("");
    }
  };

  const handleRemove = (removeTag) => {
    onChange(value.filter((tag) => tag !== removeTag));
  };

  return (
    <div className={className}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type="text"
        name="tags"
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={[styles.tagInput, localError || error ? styles.error : input.length > 0 ? styles.success : ""].join(
          " "
        )}
        aria-label="태그 입력"
      />
      {(localError || error) && <div className={styles.error}>{localError || error}</div>}
      <div className={styles.tags}>
        {value.map((tag) => (
          <span
            key={tag}
            className={styles.tagChip}
          >
            #{tag}
            <button
              type="button"
              onClick={() => handleRemove(tag)}
              className={styles.removeBtn}
              aria-label={`태그 ${tag} 삭제`}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
