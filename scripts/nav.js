const nav_btn = document.querySelector(".toggle-nav").children[0];
const nav = document.querySelector("ul");
function toggleNav() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    nav_btn.className = "fa-solid fa-bars";
  } else {
    nav.classList.add("active");
    nav_btn.className = "fa-solid fa-xmark";
  }
}
