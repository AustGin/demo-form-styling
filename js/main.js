/* insert js */
const button = document.querySelector('.menu-button');

button.addEventListener('click', () => {
   
    document.querySelector('nav').classList.toggle('show-nav');
});