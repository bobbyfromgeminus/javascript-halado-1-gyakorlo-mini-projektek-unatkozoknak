'use strict';

function getCentimeter(foot, inch) {
    const footToCm = 30.48;
    const inchToCm = 2.54;
    const result = (foot * footToCm) + (inch * inchToCm);
    return (result+' cm');
}

function printResult(content, color) {
    const result = document.querySelector('.result');
    result.textContent = content;
    result.setAttribute('class', 'result '+color);    
}

const converter = function convertLenght() {
    const foot = parseInt(document.querySelector('.input-foot').value);
    const inch = parseInt(document.querySelector('.input-inch').value);
    if (isNaN(foot)) printResult('Nem adtál meg számot!', 'red');
    else if (foot < 0) printResult('A láb értéke nem lehet negatív szám!', 'red');
    else if (foot === 0) {
        if (isNaN(inch)) printResult('Nem adtál meg számot!', 'red');
        else if (inch < 0) printResult('Az inch értéke nem lehet negatív szám!', 'red');
        else if (inch === 0) printResult('Nem lehet a láb és az inch is nulla!', 'red');
        else if (inch >= 12) printResult('Az inch 1 és 11 közötti értéket vehet fel!', 'red');
        else if (12 > inch > 0) printResult(getCentimeter(foot, inch), 'white');
    } else if (foot > 0) {
        if (isNaN(inch)) cprintResult('Nem adtál meg számot!', 'red');
        else if (inch < 0) printResult('Az inch értéke nem lehet negatív szám!', 'red');
        else if (inch >= 12) printResult('Az inch 1 és 11 közötti értéket vehet fel!', 'red');
        else if (12 > inch > 0) printResult(getCentimeter(foot, inch), 'white');
    }
    
}

function buttonClickEvent(converter) {
    document.querySelector('.convert-button').addEventListener('click', converter);
}

buttonClickEvent(converter);