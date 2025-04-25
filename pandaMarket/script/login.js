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
setupPasswordToggle("user-password-check", "togglePasswordCheck");
