let menuBtn = document.querySelector('.heading .menu .menu__btn');
let menu = document.querySelector('.heading .menu .menu__mobile');
let linkArray = document.querySelectorAll('.mob-link');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    document.querySelector('body').classList.toggle('menu-active')
})

if (window.innerWidth < 767){
    linkArray.forEach(link => {
        link.addEventListener('click', () => {
            console.log('sdfsdf')
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.querySelector('body').classList.toggle('menu-active')
        })
    })
}

let colSlides;

(window.innerHeight < 1000) ? colSlides = 1 : colSlides = 1;

var swiper = new Swiper(".roadmap__swiper", {
    slidesPerView: colSlides,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay:{
        delay: 1500,
    }
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