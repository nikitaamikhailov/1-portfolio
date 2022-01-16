let burger = document.querySelector('.header_burger')
let menu = document.querySelector('.header_nav')
let body = document.querySelector('body')

burger.addEventListener("click", function (event) {
    event.preventDefault()
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})