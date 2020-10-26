let themeDots = document.getElementsByClassName("dots");

const setTheme = (mode) => {
  if (mode == "light") {
    document.getElementById("theme-style").href = "main.css";
  }

  if (mode == "coral") {
    document.getElementById("theme-style").href = "coral.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "cornflowerblue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "lightgreen.css";
  }

  localStorage.setItem("theme", mode);
};


const theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme(light);
} else {
  setTheme(theme);
}

Array.from(themeDots).forEach((themeDot) => {
  themeDot.addEventListener("click", () => {
    let mode = themeDot.dataset.mode;
    setTheme(mode);
  });
});
