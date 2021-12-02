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

// const intFrameWith = window.innerWidth;
// console.log(intFrameWith);

// jQuery(window)
//   .resize(function () {
//     var winwidth = jQuery(window).width();
//     var winheight = jQuery(window).height();
//     var docwidth = jQuery(document).width();
//     var docheight = jQuery(document).height();
//     console.log(
//       "window width is -> " + winwidth + "window height is -> " + winheight
//     );
//     console.log(
//       "document width is -> " + docwidth + "document height is -> " + docheight
//     );
//   })
//   .resize();

const intFrameWith = window.innerWidth;
console.log(intFrameWith);

// const intFrameWith = jQuery(window).width();
// console.log(intFrameWith);
// console.log(windowpos);document.body.width

window.addEventListener("scroll", function () {
  showFunction();
});

function showFunction() {
  if (intFrameWith > 768) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById("desktop-text-holder").style.display = "block";
    } else {
      document.getElementById("desktop-text-holder").style.display = "none";
    }
  }
}

// ----Specifications animation---

window.addEventListener("scroll", function () {
  showFunction2();
});

function showFunction2() {
  if (intFrameWith > 768) {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      document.getElementById("specifications-desktop-left").style.display =
        "block";
    } else {
      document.getElementById("specifications-desktop-left").style.display =
        "none";
    }
  }
}
