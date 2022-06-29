const menuBar = document.querySelector('.hidden-bar')
const toggleUl = document.querySelector('.ul')
const bookUL = document.querySelector('.bookkk')

menuBar.addEventListener('click', _ => {
    toggleUl.classList.toggle('show-menu')
    bookUL.classList.remove('bookkk')
    bookUL.classList.remove('ul')
})