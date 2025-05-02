// 비밀번호 눈모양 토글 시작
function setupPasswordToggle(inputId, toggleId) {
  const toggle = document.getElementById(toggleId);
  const input = document.getElementById(inputId);

  toggle.addEventListener("click", () => {
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
  });
}

setupPasswordToggle("user-password", "togglePassword");
// 비밀번호 눈모양 토글 끝

// 이메일 및 비밀번호 유효성 검사 시작
// 이메일 유효성
const elInputUserEmail = document.querySelector("#user-email");
const elEmailError = document.querySelector("#user-email-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

elInputUserEmail.addEventListener("input", () => {
  if (emailRegex.test(elInputUserEmail.value)) {
    elInputUserEmail.style.outline = "2px solid #3692ff";
    elEmailError.style.display = "none";
  } else {
    elInputUserEmail.style.outline = "2px solid #f74747";
    elEmailError.style.display = "block";
  }
});

// 비밀번호 유효성
const elInputUserPassword = document.querySelector("#user-password");
const elPasswordError = document.querySelector("#user-password-error");

elInputUserPassword.addEventListener("input", () => {
  if (elInputUserPassword.value.length >= 8) {
    elInputUserPassword.parentElement.style.border = "2px solid #3692ff";
    elPasswordError.style.display = "none";
  } else {
    elInputUserPassword.parentElement.style.border = "2px solid #f74747";
    elPasswordError.style.display = "block";
  }
});
