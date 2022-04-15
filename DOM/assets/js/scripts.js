const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'


function changeMode(){
   changeClass();
}

function changeClass(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

button.addEventListener('click', changeMode)
