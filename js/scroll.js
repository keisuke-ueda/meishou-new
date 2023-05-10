window.addEventListener("scroll", function () {
  const elm = document.querySelector(".elm");
  const scroll = window.pageYOffset;
  if (scroll > 300) {
    elm.style.opacity = "1";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
    // console.log(scroll);
  }
});