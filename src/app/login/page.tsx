"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./loginPage.module.css";
import MainLogo from "components/MainLogo";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function LoginPage() {
  // 로그인 페이지이므로 nickname, validateNickname은 필요 없음
  const { email, setEmail, emailError, password, setPassword, passwordError, validateEmail, validatePassword } =
    useAuthForm();

  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <div className={styles.container}>
      <MainLogo
        variant="auth"
        size="big"
      />
      <form
        className={styles.submitForm}
        onSubmit={(e) => {
          if (!isFormValid) {
            e.preventDefault(); // 유효하지 않으면 제출X
          }
        }}
      >
        <label
          htmlFor="email"
          className={styles.labelFont}
        >
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          className={`${styles.inputBox} ${emailError ? styles.inputError : ""}`}
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value); // 상태 업데이트
            validateEmail(e.target.value); // 유효성 검사 실행
          }}
          onBlur={() => validateEmail(email)} // 포커스 -> 미입력 -> 포커스 벗어날 때 오류표시
        />
        {emailError && <span className={styles.error}>{emailError}</span>}

        <label
          htmlFor="password"
          className={styles.labelFont}
        >
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className={`${styles.inputBox} ${passwordError ? styles.inputError : ""}`}
          value={password || ""}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          onBlur={() => validatePassword(password)}
        />
        {passwordError && <span className={styles.error}>{passwordError}</span>}

        <button
          type="submit"
          className={isFormValid ? styles.loginBtnActive : styles.loginBtn}
          disabled={!isFormValid} // 유효하지 않은 경우 버튼 자체가 비활성(form 기본동작 억제)
        >
          로그인
        </button>
      </form>

      <div className={styles.signUp}>
        <div className={styles.oathLogin}>
          <p>간편 로그인하기</p>
          <div className={styles.oathLoginArea}>
            <Link href={"http://www.google.com"}>
              <Image
                src="/ic_google.svg"
                alt="구글 로그인"
                width={42}
                height={42}
              />
            </Link>
            <Link href={"http://www.kakao.com"}>
              <Image
                src={"/ic_kakao.svg"}
                alt="카카오 로그인"
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>

        <div className={styles.signUpArea}>
          판다마켓이 처음이신가요?
          <Link
            href={"/signUp"}
            className={styles.signUpBtn}
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
