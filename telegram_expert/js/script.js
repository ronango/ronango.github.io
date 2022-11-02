/*Tabsx initialization*/
const tabs = new ItcTabs('.tabs');

/**
 * ANIMATIONS
 */
const trainingImages = document.querySelectorAll('.training__stage .stage__pre img')
/**
 * 1) Fade-right
 */

const observerFadeRight = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-right');
            if (entry.target.tagName == 'IMG'){
                document.querySelector('.app').classList.add('app--active');
            }
        }
    });
});

observerFadeRight.observe(document.querySelector('.app img'));
observerFadeRight.observe(document.querySelector('.app .btn'));
observerFadeRight.observe(document.querySelector('.hello_block p'));


/**
 * 2) Fade-left
 */

const observerFadeLeft = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-left');
        }
    });
});

observerFadeLeft.observe(document.querySelector('.our_community h3'));
observerFadeLeft.observe(document.querySelector('.our_community__tabs'));
observerFadeLeft.observe(document.querySelector('.hello_block h1'));
observerFadeLeft.observe(document.querySelector('.hello_block__btns'));


/**
 * 3) Fade-top
 */

const observerFadeTop = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-top');
        }
    });
});

observerFadeTop.observe(document.querySelector('.header'));

/**
 * Incoming Image
 */

const observerIncomingImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('incoming-image');
        }
    });

});

observerIncomingImage.observe(document.querySelector('.important__container .image-block--first'));
observerIncomingImage.observe(document.querySelector('.important__container .image-block--second'));

/**
 * Translate image
 */

 const observerTranslatingRightImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-rightImage');
        }
    });

});
const observerTranslatingLeftImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-leftImage');
        }
    });

});

trainingImages.forEach((el, index) =>{
    if (index % 2 == 0) {
        observerTranslatingRightImage.observe(el);
    }else {
        observerTranslatingLeftImage.observe(el);
    }
});


/**
 * Particles
 */

 particlesJS('particles-js',
  
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 5,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 2,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true,
   "config_demo": {
     "hide_card": false,
     "background_color": "#b61924",
     "background_image": "",
     "background_position": "50% 50%",
     "background_repeat": "no-repeat",
     "background_size": "cover"
   }
 }

);