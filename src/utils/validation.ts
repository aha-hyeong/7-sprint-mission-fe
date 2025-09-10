// EMAIL_STRICT
// 로컬파트: A-Z, a-z, 0-9, ._%+-
// 도메인: 각 라벨은 1~63자, 하이픈 시작/끝 불가
// TLD: 최소 2자 이상 알파벳
const EMAIL_STRICT = /^[A-Za-z0-9._%+-]+@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/;
export const PASSWORD_LENGTH = 4;

export function isValidEmail(email: string): boolean {
  return EMAIL_STRICT.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= PASSWORD_LENGTH;
}
