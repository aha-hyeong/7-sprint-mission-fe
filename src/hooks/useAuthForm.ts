import { useState } from "react";
import { isValidEmail, isValidPassword } from "@/utils/validation";
import { errors } from "@/constants/error";

export function useAuthForm() {
  // 공통 상태
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // 회원가입용 추가 상태
  const [nickname, setNickname] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [passwordCheckError, setPasswordCheckError] = useState<string>("");

  // 공통 유효성 검사 함수
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError(errors.emailEmpty);
    } else if (!isValidEmail(value)) {
      setEmailError(errors.emailInvalid);
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) {
      setPasswordError(errors.passwordEmpty);
    } else if (!isValidPassword(value)) {
      setPasswordError(errors.passwordInvalid);
    } else {
      setPasswordError("");
    }
  };

  const validatePasswordCheck = (value: string) => {
    if (!value.trim()) {
      setPasswordCheckError(errors.passwordEmpty);
    } else if (value !== password) {
      setPasswordCheckError(errors.passwordMismatch);
    } else {
      setPasswordCheckError("");
    }
  };

  const validateNickname = (value: string) => {
    if (!value.trim()) {
      setNicknameError(errors.nicknameEmpty);
    } else {
      setNicknameError("");
    }
  };

  return {
    //상태들
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    passwordCheck,
    setPasswordCheck,
    passwordCheckError,
    nickname,
    setNickname,
    nicknameError,

    //유효성 검사 함수
    validateEmail,
    validatePassword,
    validateNickname,
    validatePasswordCheck,
  };
}
