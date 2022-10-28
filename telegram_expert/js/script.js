/*Tabsx initialization*/
let tabs = new ItcTabs('.tabs');

/**
 * ANIMATIONS
 */
var window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
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
