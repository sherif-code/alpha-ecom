const hamburger = document.querySelector("hamburger");
const navitems = document.querySelector("navitems");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navitems.classList.toggle("active");
});

document.querySelectorAll("navlinks").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navitems.classList.remove("active");
  })
);
