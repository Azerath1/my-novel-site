// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

// Проверка сохраненной темы и системных настроек
const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Установка начальной темы
const setTheme = (theme) => {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// Инициализация темы
setTheme(getPreferredTheme());

// Обработчик клика
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);

  // Анимация кнопки
  themeToggle.style.transform = "scale(0.95)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 100);
});

// Слушатель системных изменений
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });
