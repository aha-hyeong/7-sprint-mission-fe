// 비밀번호 눈모양 토글 시작
function setupPasswordToggle(inputId, toggleId) {
  const toggle = document.getElementById(toggleId);
  const input = document.getElementById(inputId);

  toggle.addEventListener("click", () => {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
  });
}

setupPasswordToggle("user-password", "togglePassword");
setupPasswordToggle("user-password-check", "togglePasswordCheck");
// 비밀번호 눈모양 토글 끝

// 회원가입 이메일 유효성 검사
const elInputUserEmail = document.querySelector(".email-input");
const elEmailError = document.querySelector("#user-email-error");
const elEmailEmptyError = document.querySelector("#user-email-empty-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

elInputUserEmail.addEventListener("blur", () => {
  const emailValue = elInputUserEmail.value.trim();

  if (emailValue === "") {
    elInputUserEmail.style.outline = "2px solid #f74747";
    elEmailError.style.display = "none";
    elEmailEmptyError.style.display = "block";
  } else if (!emailRegex.test(emailValue)) {
    elInputUserEmail.style.outline = "2px solid #f74747";
    elEmailError.style.display = "block";
    elEmailEmptyError.style.display = "none";
  } else {
    elInputUserEmail.style.outline = "2px solid #f74747";
    elEmailError.style.display = "none";
    elEmailEmptyError.style.display = "none";
  }
});
