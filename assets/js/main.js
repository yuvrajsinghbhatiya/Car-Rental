let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
}
)


