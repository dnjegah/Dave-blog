// Toggle light/dark mode
const lightDarkModeSwitch = document.getElementById("light-dark-mode-switch");
const container = document.getElementById("container");

lightDarkModeSwitch.addEventListener("click", () => {
    container.classList.toggle("light");
    container.classList.toggle("dark");
    lightDarkModeSwitch.textContent = container.classList.contains("light") ? "☀️" : "🌙";
});

// Form submission
const form = document.getElementById("formDinoData");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted!");
});