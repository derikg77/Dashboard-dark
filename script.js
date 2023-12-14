let dark = document.querySelector('.trilho');
let body = document.querySelector('body');
let box = document.querySelector('.box');
let header = document.querySelector('.title-header');
let titleHeader = document.querySelector('.title-header-box');
let totalHeader = document.querySelector('.total-header')
let darkDesc = document.querySelector('.dark-desc')


dark.addEventListener('click', () => {
    dark.classList.toggle('dark');
    body.classList.toggle('dark');
    // box.classList.toggle('dark');
    // header.classList.toggle('dark');
    // titleHeader.classList.toggle('dark');
    // totalHeader.classList.toggle('dark');


})