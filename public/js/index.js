// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const headerYOffset = header.offsetTop;

  if (window.scrollY > headerYOffset) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
};

// Hamburger button navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
