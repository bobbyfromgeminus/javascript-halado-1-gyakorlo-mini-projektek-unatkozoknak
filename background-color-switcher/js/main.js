'use strict';

const colors = document.querySelectorAll('.color-switcher');
const body = document.querySelector('body');

function backgroundChanger(i) {
    let colorTheme = colors[i].classList[1];
    body.setAttribute('class', colorTheme);

}

function colorClickEvent() {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('click', () => backgroundChanger(i));
    }
}

colorClickEvent();