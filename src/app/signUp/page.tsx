"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./signUp.module.css";
import MainLogo from "components/MainLogo";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function SignUpPage() {
  const {
    email,
    setEmail,
    emailError,
    nickname,
    setNickname,
    nicknameError,
    password,
    setPassword,
    passwordError,
    passwordCheck,
    setPasswordCheck,
    passwordCheckError,
    validateEmail,
    validatePassword,
    validateNickname,
    validatePasswordCheck,
  } = useAuthForm();

  const isFormValid =
    !emailError &&
    !nicknameError &&
    !passwordError &&
    !passwordCheckError &&
    email &&
    nickname &&
    password &&
    passwordCheck;

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
            e.preventDefault();
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          onBlur={() => validateEmail(email)}
        />
        {emailError && <span className={styles.error}>{emailError}</span>}
        <label
          htmlFor="nickname"
          className={styles.labelFont}
        >
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          className={`${styles.inputBox} ${nicknameError ? styles.inputError : ""}`}
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            validateNickname(e.target.value);
          }}
          onBlur={() => validateNickname(nickname)}
        />
        {nicknameError && <span className={styles.error}>{nicknameError}</span>}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          onBlur={() => validatePassword(password)}
        />
        {passwordError && <span className={styles.error}>{passwordError}</span>}
        <label
          htmlFor="passwordCheck"
          className={styles.labelFont}
        >
          비밀번호 확인
        </label>
        <input
          id="passwordCheck"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          className={`${styles.inputBox} ${passwordCheckError ? styles.inputError : ""}`}
          value={passwordCheck}
          onChange={(e) => {
            setPasswordCheck(e.target.value);
            validatePasswordCheck(e.target.value);
          }}
          onBlur={() => validatePasswordCheck(passwordCheck)}
        />
        {passwordCheckError && <span className={styles.error}>{passwordCheckError}</span>}
        <button
          type="submit"
          className={isFormValid ? styles.signUpActiveBtn : styles.signUpBtn}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>
      <div className={styles.signUp}>
        <div className={styles.oathLogin}>
          <p>간편 회원가입하기</p>
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
      </div>
    </div>
  );
}
