let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header nav");
let navbtns = document.querySelectorAll(".header nav a");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
navbtns.forEach((Element) => {
  Element.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  });
});
