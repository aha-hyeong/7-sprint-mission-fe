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
// 비밀번호 눈모양 토글 끝

// 이메일 및 비밀번호 유효성 검사 시작
// 이메일 유효성
const elInputUserEmail = document.querySelector("#user-email");
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
    elInputUserEmail.style.outline = "2px solid #3692ff";
    elEmailError.style.display = "none";
    elEmailEmptyError.style.display = "none";
  }
});

// 비밀번호 유효성
const elInputUserPassword = document.querySelector("#user-password");
const elPasswordError = document.querySelector("#user-password-error");
const elPasswordEmptyError = document.querySelector("#user-password-empty-error");

elInputUserPassword.addEventListener("blur", () => {
  const passwordValue = elInputUserPassword.value.trim();

  if (passwordValue === "") {
    elInputUserPassword.parentElement.style.border = "2px solid #f74747";
    elPasswordEmptyError.style.display = "block";
    elPasswordError.style.display = "none";
  } else if (passwordValue.length < 8) {
    console.log("비밀번호 8자 이하임");
    elInputUserPassword.parentElement.style.border = "2px solid #f74747";
    elPasswordEmptyError.style.display = "none";
    elPasswordError.style.display = "block";
  } else {
    elInputUserPassword.parentElement.style.border = "2px solid #3692ff";
    elPasswordEmptyError.style.display = "none";
    elPasswordError.style.display = "none";
  }
});
