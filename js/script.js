let menu = document.querySelector('#menu')
let navbar = document.querySelect('.navbar')

menu.onlick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}