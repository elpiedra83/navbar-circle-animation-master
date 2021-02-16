const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("mouseover", () => {
  lines.forEach((line) => {
    line.classList.add("linehover");
  });
});

hamburger.addEventListener("mouseout", () => {
  lines.forEach((line) => {
    line.classList.remove("linehover");
  });
});

