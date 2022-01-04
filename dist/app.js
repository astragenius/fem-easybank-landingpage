const mobileMenu = document.getElementById('mobileMenu');
const navMobile = document.getElementById('nav__mobile');
const overlay = document.getElementById('overlay');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navMobile.classList.toggle('slideOpen');
    overlay.classList.toggle('open');
})