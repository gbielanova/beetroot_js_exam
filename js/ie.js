var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

// If Internet Explorer
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // IE don't like this specific svg
    let logos = document.querySelectorAll('.nav__logo');
    Array.prototype.forEach.call(logos, function (logo) {
        logo.style.backgroundImage = "url('./img/logo.png')";
        logo.style.backgroundRepeat = 'no-repeat';
        logo.style.backgroundPosition = 'center';
    });
    // IE don't like swiper
    let headerSlides = document.querySelectorAll('.header__texts');
    Array.prototype.forEach.call(headerSlides, function (el) {
        el.style.display = 'none';
    });
    headerSlides[0].style.display = 'flex';

    let newsSlides = document.querySelectorAll('.news__item');
    Array.prototype.forEach.call(newsSlides, function (el) {
        el.style.display = 'none';
        el.style.margin = '0 35%';
    });
    newsSlides[0].style.display = 'flex';
    newsSlides[1].style.display = 'flex';
    newsSlides[2].style.display = 'flex';



    document.querySelector('.swiper-button-next').style.display = 'none';
    document.querySelector('.swiper-button-prev').style.display = 'none';
}