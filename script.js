"use strict";

function calculateNumbers() {
    var firstNumber = document.getElementById('firstNumber');
    var firstNumberParsed = parseFloat(firstNumber.value);

    var secondNumber = document.getElementById('secondNumber');
    var secondNumberParsed = parseFloat(secondNumber.value);

    var warningMessage = document.getElementById('warningMessage');

    var value = document.getElementById('mathSignsDropDown').value;

    var warnings = [
        '<p>Wartości w obydwu polach nie są liczbami!</p>',
        '<p>Wartość w drugim polu nie jest liczbą!</p>',
        '<p>Wartość w pierwszym polu nie jest liczbą!</p>'
    ];

    var result = document.getElementById('result');

    removeWarningClass([firstNumber, secondNumber]);
    removeMarkClass([result]);
    removeWarningMessage([warningMessage]);

    if (isNaN(firstNumberParsed) === true && isNaN(secondNumberParsed) === true) {
        firstNumber.setAttribute('class', 'warning');
        secondNumber.setAttribute('class', 'warning');
        warningMessage.innerHTML = warnings[0];
        addMark();
    } else if (isNaN(secondNumberParsed) === true) {
        secondNumber.setAttribute('class', 'warning');
        warningMessage.innerHTML = warnings[1];
        addMark();
    } else if (isNaN(firstNumberParsed) === true) {
        firstNumber.setAttribute('class', 'warning');
        warningMessage.innerHTML = warnings[2];
        addMark();
    } else {
        switch (value) {
            case 'add':
                result.innerHTML = addition(firstNumberParsed, secondNumberParsed);
                break;
            case 'subtract':
                result.innerHTML = subtraction(firstNumberParsed, secondNumberParsed);
                break;
            case 'multiply':
                result.innerHTML = multiplication(firstNumberParsed, secondNumberParsed);
                break;
            case 'divide':
                result.innerHTML = division(firstNumberParsed, secondNumberParsed);
                break;
            default:
                window.alert('Something went wrong. Please call the fire department ;)');
        }
    }

    function addMark() {
        result.innerHTML = '';
        result.setAttribute('class', 'mark');
    }

    function removeWarningClass(arrayOfElements) {
        for (var i = 0; i < arrayOfElements.length; i++) {
            arrayOfElements[i].classList.remove('warning');
        }
    }

    function removeMarkClass(arrayOfElements) {
        for (var i = 0; i < arrayOfElements.length; i++) {
            arrayOfElements[i].classList.remove('mark');
        }
    }

    function removeWarningMessage(arrayOfElements) {
        for (var i = 0; i < arrayOfElements.length; i++) {
            arrayOfElements[i].innerHTML = '';
        }
    }

    // if (value === 'add') {
    //     result = addition(firstNumber, secondNumber);
    // } else if (value === 'subtract') {
    //     result = subtraction(firstNumber, secondNumber)
    // } else if (value === 'multiply') {
    //     result = multiplication(firstNumber, secondNumber);
    // } else {
    //     result = division(firstNumber, secondNumber);
    // }

};

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


// "use strict";

// window.onload = function () {
//     var firstNumber = document.getElementById('firstNumber').value;
//     firstNumber = parseFloat(firstNumber);

//     if (isNaN(firstNumber) === true) {
//         Object.assign(document.getElementById('firstNumber').style, {
//             'background-color': '#B75C5C',
//             border: '1px solid #A70B0B',
//             color: '#fff'
//         });
//         var warningMessage = document.getElementById('warningMessage');
//         warningMessage.innerHTML = '<p>The value entered is not a number!</p>';

//         return console.error('Wrong value in text box 1');
//     }

//     var secondNumber = document.getElementById('secondNumber').value;

//     document.getElementById('result').innerHTML = addition(firstNumber, secondNumber);
// };

// function addition(a, b) {
//     return a + b;
// }