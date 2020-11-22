'use strict';

const balloons = document.querySelectorAll('.balloon');
const audio = document.querySelector('.audio');
let popped = 0;
let startTime = 0;
let endTime = 0;

const popTheBalloon = function (i) {
    if (balloons[i].className === "balloon") {
        if (startTime === 0) startTime = new Date().getTime();
        balloons[i].setAttribute('class', 'balloon-popped');
        balloons[i].textContent = 'POP!';
        audio.play();
        popped += 1;
        allBalloonPopped();
    }
}

const siteRefresh = function () {
    let refreshTime = 5;
    let refreshContent = document.querySelector('.result-refresh');
    refreshContent.textContent = refreshTime;
    setInterval( function() {
        if (refreshTime > 1) {
            refreshTime -= 1;
            refreshContent.textContent = refreshTime;
        } else {
            location.reload();
        }
    }, 1000);
}

const allBalloonPopped = function () {
    if (popped === 25) {
        endTime = new Date().getTime();
        const popTime = parseFloat((endTime - startTime)/1000);
        document.querySelector('.balloon-group').setAttribute('class', 'hide');
        document.querySelector('.result').setAttribute('class', 'result');
        document.querySelector('.result-time').textContent = popTime;
        siteRefresh();
    }
}

const balloonMouseOver = function () {
    for (let i=0; i<balloons.length; i += 1) {
        balloons[i].addEventListener('mouseover', () => popTheBalloon(i));  
    }
}

balloonMouseOver();