const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("scroll", function () {
  showFunction();
});

function showFunction() {
  //   console.log(windowpos);
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    document.getElementById("desktop-text").style.display = "block";
  } else {
    document.getElementById("desktop-text").style.display = "none";
  }
}
