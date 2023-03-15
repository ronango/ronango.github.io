const typed_strings = document.querySelector(".typed-items").innerHTML;

var typed = new Typed('.typed', {
    strings: typed_strings.split("\n "),
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
  });