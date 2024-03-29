const hero = document.querySelector('.hero');
const toggle = document.querySelector('.toggle');
const hamburgerLines = document.querySelectorAll('.line');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('hide')
    toggle.classList.toggle('active')
    hero.classList.toggle('active')
    hamburgerLines.forEach((line) => {
        line.classList.toggle('black')
    })
});
