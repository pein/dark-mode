const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
// Event Listners
toggleSwitch.addEventListener("change", switchTheme);
console.log(toggleSwitch);
