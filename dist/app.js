const mobileMenu = document.getElementById('mobileMenu');
const navMobile = document.getElementById('nav__mobile');
const body = document.getElementById('body');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navMobile.classList.toggle('slideOpen');
    body.classList.toggle('overlay');
})