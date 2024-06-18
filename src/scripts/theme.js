const body = document.querySelector('body');
const button = document.querySelector(".theme");
let darkMode;

button.addEventListener("click", themeChange)

function themeChange() {
    // BODY
    darkMode = !darkMode;
    body.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode-button");
   
    localStorage.setItem("theme", darkMode);
};

function themePreferenceAnalysis() {
    darkMode = JSON.parse(localStorage.getItem("theme"));
    if (darkMode) {
        body.classList.add("dark-mode");
        button.classList.add("dark-mode-button");
    }
}
themePreferenceAnalysis();