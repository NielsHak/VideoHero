const hero = document.querySelector('.hero');
const toggle = document.querySelector('.toggle');
const hamburgerLines = document.querySelectorAll('.line');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    hero.classList.toggle('active')
    hamburgerLines.forEach((line) => {
        line.classList.toggle('black')
    })
});