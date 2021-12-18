document.addEventListener("DOMContentLoaded", function () {
  darkMode();
});

function darkMode() {
  const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const html = document.querySelector("html");

  if (prefiereDarkMode.matches) {
    document.body.classList.add("dark-mode");
    html.classList.add("dark-mode-scrollbar");
  } else {
    document.body.classList.remove("dark-mode");
    html.classList.remove("dark-mode-scrollbar");
  }

  prefiereDarkMode.addEventListener("change", function () {
    if (prefiereDarkMode.matches) {
      document.body.classList.add("dark-mode");
      html.classList.add("dark-mode-scrollbar");
    } else {
      document.body.classList.remove("dark-mode");
      html.classList.remove("dark-mode-scrollbar");
    }
  });

  const botonDarkMode = document.querySelector(".dark-mode-button");
  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    html.classList.toggle("dark-mode-scrollbar");
  });
}
