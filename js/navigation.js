const burgerNav = document.getElementsByClassName("nav__burger")[0];
const line1 = document.getElementsByClassName("line-1")[0];
const line2 = document.getElementsByClassName("line-2")[0];
const line3 = document.getElementsByClassName("line-3")[0];
const overlay = document.getElementsByClassName("nav__overlay")[0];
const navItems = document.getElementsByClassName("nav__bar")[0];


function ToggleBurger() {
    // if burger is visible
    if (burgerNav.offsetParent) {
        line2.classList.toggle('hide');
        line1.classList.toggle('line-1-rotate');
        line3.classList.toggle('line-3-rotate');
        overlay.classList.toggle('run');
        navItems.classList.toggle('mobile');
    }
}

burgerNav.addEventListener('click', ToggleBurger);

overlay.addEventListener('click', ToggleBurger);

navItems.addEventListener('click', (event) => {
    document.querySelector('.nav__item-circle.active').classList.toggle('active');
    event.target.previousElementSibling.classList.toggle('active');
    ToggleBurger;
});

