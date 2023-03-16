const menu = document.querySelector('.icon');
const menuLinks = document.querySelector('ul');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

