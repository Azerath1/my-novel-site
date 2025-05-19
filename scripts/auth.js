// scripts/auth.js
document.addEventListener("DOMContentLoaded", () => {
  const formsWrapper = document.querySelector(".auth-container");
  const loginForm = document.querySelector(".form-wrapper.login");
  const signupForm = document.querySelector(".form-wrapper.signup");
  const eyeIcons = document.querySelectorAll(".eye-icon");
  const switchLinks = document.querySelectorAll(".link");

  // Переключение видимости пароля
  eyeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const passwordField = icon.parentElement.querySelector(".password");
      const isPassword = passwordField.type === "password";

      passwordField.type = isPassword ? "text" : "password";
      icon.src = isPassword
        ? "images/eye-visible.svg"
        : "images/eye-hidden.svg";
    });
  });

  // Переключение между формами
  switchLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      formsWrapper.querySelector(".active").classList.remove("active");
      const target = link.classList.contains("login-link")
        ? loginForm
        : signupForm;
      target.classList.add("active");
    });
  });

  // Валидация форм
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (form.classList.contains("signup")) {
        const password = form.querySelector('input[name="password"]');
        const confirmPassword = form.querySelector(
          'input[name="confirm_password"]'
        );

        if (password.value !== confirmPassword.value) {
          showError(confirmPassword, "Пароли не совпадают");
          return;
        }
      }

      // Отправка формы
      console.log("Форма отправлена");
    });
  });

  function showError(input, message) {
    const errorElement = input.parentElement.querySelector(".error-message");
    if (!errorElement) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
      input.parentElement.appendChild(errorDiv);
    } else {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
    input.focus();
  }
});
