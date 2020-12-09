var button = document.querySelector('nav button');
var menu = document.querySelector('.nav__list_mobile');
var nav = document.querySelector('nav');

button.addEventListener('click', function () {
    menu.classList.toggle('nav__list_mobile_open');
    nav.classList.toggle('nav_animation-op');
});