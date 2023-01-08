const menu = document.querySelector(".menu");
const navItems = document.querySelector(".nav-items");
const loader = document.querySelector(".loader");

function barsMenu(x) {
  x.classList.toggle("change");
  navItems.classList.toggle("active");
}

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});
