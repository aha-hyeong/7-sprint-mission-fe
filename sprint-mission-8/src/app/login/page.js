"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import InputField from "@/../components/InputField";
import PasswordField from "@/../components/PasswordField";
import Button from "@/../components/Button";

function validatePassword(password, { minLength = 4, requireAlpha = true, requireNumber = true } = {}) {
  if (!password) return { valid: false, error: "비밀번호를 입력해주세요." };
  if (password.length < minLength) return { valid: false, error: `비밀번호는 ${minLength}자 이상이어야 합니다.` };
  // if (requireAlpha && !/[A-Za-z]/.test(password)) return { valid: false, error: "영문을 포함해야 합니다." };
  if (requireNumber && !/[0-9]/.test(password)) return { valid: false, error: "숫자를 포함해야 합니다." };
  return { valid: true, error: "" };
}

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";
    let emailSuccess = false;
    let passwordSuccess = false;

    // 이메일 검사
    if (!formData.email) {
      emailError = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailError = "잘못된 이메일 형식입니다.";
    } else {
      emailSuccess = true;
    }

    // 비밀번호 검사 (함수 사용, 옵션 전달 가능)
    const pwResult = validatePassword(formData.password);
    passwordError = pwResult.error;
    passwordSuccess = pwResult.valid;

    setErrors({ email: emailError, password: passwordError });
    setSuccess({ email: emailSuccess, password: passwordSuccess });
    if (emailSuccess && passwordSuccess) {
      // 로그인 처리
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";
    let isSuccess = false;
    if (name === "email") {
      if (!value) {
        errorMsg = "이메일을 입력해주세요.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "잘못된 이메일 형식입니다.";
      } else {
        isSuccess = true;
      }
      setErrors((prev) => ({ ...prev, email: errorMsg }));
      setSuccess((prev) => ({ ...prev, email: isSuccess }));
    } else if (name === "password") {
      const pwResult = validatePassword(value);
      setErrors((prev) => ({ ...prev, password: pwResult.error }));
      setSuccess((prev) => ({ ...prev, password: pwResult.valid }));
    }
  };

  return (
    <main className={styles.login__page}>
      <div className={styles.login__container}>
        <div className={styles.login__logo}>
          <Link href="/">
            <Image
              src="/panda_face.svg"
              width={50}
              height={50}
              alt="판다마켓 로고"
            />
            로그인
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.login__form}
        >
          <InputField
            id="email"
            name="email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors((prev) => ({ ...prev, email: "" }));
              setSuccess((prev) => ({ ...prev, email: false })); // 입력 중엔 성공 해제
            }}
            onBlur={handleBlur}
            error={errors.email}
            success={success.email}
          />
          <PasswordField
            id="password"
            name="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setErrors((prev) => ({ ...prev, password: "" }));
              setSuccess((prev) => ({ ...prev, password: false }));
            }}
            onBlur={handleBlur}
            error={errors.password}
            success={success.password}
          />
          <Button
            type="submit"
            className={styles.login__button}
          >
            로그인
          </Button>
        </form>
      </div>
    </main>
  );
}
