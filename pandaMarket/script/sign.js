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
    elInputUserEmail.style.outline = "2px solid #3692ff";
    elEmailError.style.display = "none";
    elEmailEmptyError.style.display = "none";
  }
});

// 비밀번호 유효성 검사
const elInputUserPassword = document.querySelector("#user-password");
const elPasswordError = document.querySelector("#user-password-error");
const elPasswordEmptyError = document.querySelector("#user-password-empty-error");
const elInputUserPasswordCheck = document.querySelector("#user-password-check");
const elPasswordCheckError = document.querySelector("#user-password-check-error");
const elPasswordCheckEmptyError = document.querySelector("#user-password-check-empty-error");
const elPasswordInputError = document.querySelector("#user-password-check-input-error");

elInputUserPassword.addEventListener("input", () => {
  const passwordValue = elInputUserPassword.value.trim();

  if (passwordValue === "") {
    elInputUserPassword.style.outline = "2px solid #f74747";
    elPasswordEmptyError.style.display = "block";
    elPasswordError.style.display = "none";
  } else if (passwordValue.length < 8) {
    elInputUserPassword.style.outline = "2px solid #f74747";
    elPasswordEmptyError.style.display = "none";
    elPasswordError.style.display = "block";
  } else {
    elInputUserPassword.style.outline = "2px solid #3692ff";
    elPasswordEmptyError.style.display = "none";
    elPasswordError.style.display = "none";
  }
});

elInputUserPasswordCheck.addEventListener("input", () => {
  const passwordValue = elInputUserPassword.value.trim();
  const passwordCheckValue = elInputUserPasswordCheck.value.trim();

  if (passwordCheckValue === "") {
    elInputUserPasswordCheck.style.outline = "2px soilid #f74747";
    elPasswordCheckEmptyError.style.display = "block";
    elPasswordCheckError.style.display = "none";
    elPasswordInputError.style.display = "none";
  } else if (passwordCheckValue.length < 8) {
    elInputUserPasswordCheck.style.outline = "2px solid #f74747";
    elPasswordCheckEmptyError.style.display = "none";
    elPasswordCheckError.style.display = "block";
    elPasswordInputError.style.display = "none";
  } else if (passwordCheckValue !== passwordValue) {
    elInputUserPasswordCheck.style.outline = "2px solid #f74747";
    elPasswordInputError.style.display = "block";
    elPasswordCheckEmptyError.style.display = "none";
    elPasswordCheckError.style.display = "none";
  } else {
    elInputUserPasswordCheck.style.outline = "2px solid #3692ff";
    elPasswordInputError.style.display = "none";
    elPasswordCheckEmptyError.style.display = "none";
    elPasswordCheckError.style.display = "none";
  }
});

//회원가입 버튼 활성화
const elsingButton = document.querySelector(".sign-button");

function updateSignButton() {
  const isEmailValid = emailRegex.test(elInputUserEmail.value.trim());
  const isPasswordValid = elInputUserPassword.value.trim().length >= 8;
  const isPasswordCheckValid =
    elInputUserPasswordCheck.value.trim() === elInputUserPassword.value.trim();

  if (isEmailValid && isPasswordValid && isPasswordCheckValid) {
    elsingButton.style.backgroundColor = "#3692ff";
    elsingButton.style.cursor = "pointer";
    elsingButton.disabled = false;
  } else {
    elsingButton.style.backgroundColor = "#9ca3af";
    elsingButton.style.cursor = "not-allowed";
    elsingButton.disabled = true;
  }
}

elInputUserEmail.addEventListener("blur", updateSignButton);
elInputUserPassword.addEventListener("input", updateSignButton);
elInputUserPasswordCheck.addEventListener("input", updateSignButton);

//회원가입 제출 + alret
const USER_DATA = [
  { email: "test@codeit.com", password: "12345678" },
  { email: "codeit@codeit.com", password: "876554321" },
];

const form = document.querySelector(".sign-form");
const emailInput = document.querySelector(".email-input");
const passwordCheckInput = document.querySelector("#user-password-check");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordCheckInput.value.trim();

  const foundUser = USER_DATA.find((user) => user.email === email);

  if (foundUser) {
    alert("사용 중인 이메일입니다.");
  } else {
    USER_DATA.push({ email: email, password: password });
    window.location.href = "./login.html";
  }
});
