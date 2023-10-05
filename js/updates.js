import * as elements from './elements.js'

export function updateDisplay(target) {
    const oldElement = document.querySelector('.selected')
    const elements = document.querySelectorAll('nav a')

    oldElement.classList.remove('selected')

    for(let element of elements) {
        if(element.href === target.href) {
            element.classList.add('selected')
            return
        }
    }
}

export function updateBackground(route) {

    switch(route) {
        case '/':
            elements.container.style.backgroundImage = 'url(./assets/mountains-universe-1.png)'
            break;

        case '/about-exploration':
            elements.container.style.backgroundImage = 'url(./assets/mountains-universe-3.png)'
            break;

        case '/about-universe':
            elements.container.style.backgroundImage = 'url(./assets/mountains-universe02.png)'
            break;

        default:
            elements.container.style.backgroundColor = "url(./assets/mountains-universe-1.png)"
            break;
    }
}