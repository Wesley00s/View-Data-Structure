// let menu = document.querySelector('#menu')
// let navbar = document.querySelect('.navbar')

// menu.onlick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

const menu = document.querySelector('.menuIcon');

menu.addEventListener('click', () => {
    
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('hiddenMenu');
});