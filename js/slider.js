var swiper = new Swiper(".roadmap__swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
});

var swiperSm = new Swiper(".slider-sm__swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  }
})
