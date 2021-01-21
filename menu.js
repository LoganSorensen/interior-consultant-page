const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const menuClose = document.querySelector(".menu-close")

menuButton.addEventListener("click", () => {
    nav.classList.add('nav-open')
})

menuClose.addEventListener("click", () => {
    nav.classList.remove('nav-open')
})