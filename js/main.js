const action = document.getElementById("action");
const menu = document.getElementById("menu");

menu.addEventListener("click", menuActive);

function menuActive() {
  menu.classList.toggle("active");
  action.classList.toggle("active");
}
