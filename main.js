const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const zeroButton = document.querySelector('.zero');
const clearButton = document.querySelector('.clear');
const additionButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalsButton = document.querySelector('.equals');

let displayNumber = 0;
let firstNumber = 0;
let operation = "";
let calculator = document.querySelector('.top');
let display = document.querySelector('.screen');
display.textContent = displayNumber;

//eventlisteners
equalsButton.addEventListener('click', () => {
    displayNumber = operate(parseInt(firstNumber, 10), parseInt(displayNumber, 10), operation);
    resetScreen();
    console.log(firstNumber);
    console.log(displayNumber);
});

additionButton.addEventListener('click', () => {
    firstNumber = displayNumber;
    displayNumber = 0;
    operation = '+';
    resetScreen();
    console.log(firstNumber);
    console.log(displayNumber);
});

minusButton.addEventListener('click', () => {
    firstNumber = displayNumber;
    displayNumber = 0;
    operation = '-';
    resetScreen();
    console.log(firstNumber);
    console.log(displayNumber);
});

multiplyButton.addEventListener('click', () => {
    firstNumber = displayNumber;
    displayNumber = 0;
    operation = '*';
    resetScreen();
    console.log(firstNumber);
    console.log(displayNumber);
});

divideButton.addEventListener('click', () => {
    firstNumber = displayNumber;
    displayNumber = 0;
    operation = '/';
    resetScreen();
    console.log(firstNumber);
    console.log(displayNumber);
});

clearButton.addEventListener('click', () => {
    displayNumber = 0;
    firstNumber = 0;
    operation = "";
    resetScreen ();
});

// *********************************IF ELSE */
// oneButton.addEventListener('click', () => {
//     if (displayNumber == 0) {
//         displayNumber = displayNumber + 1;
//     } else {
//         displayNumber = displayNumber + '1';
//     } 
//     resetScreen();   
// }); 

oneButton.addEventListener('click', () => {
    displayNumber = (displayNumber == 0) ? displayNumber + 1 : displayNumber + '1';
    resetScreen();
});
//**************************TERNARY^^^^^^ */

twoButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 2;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '2';
        resetScreen ()
    }    
}); 

threeButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 3;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '3';
        resetScreen ()
    }    
}); 

fourButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 4;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '4';
        resetScreen ()
    }    
}); 

fiveButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 5;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '5';
        resetScreen ()
    }    
}); 

sixButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 6;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '6';
        resetScreen ()
    }    
}); 

sevenButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 7;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '7';
        resetScreen ()
    }    
}); 

eightButton.addEventListener('click', () => {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 8;
    } else {
        displayNumber = displayNumber + '8';
    }
    resetScreen();    
}); 

nineButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 9;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '9';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

zeroButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 0;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '0';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

//screen functions
function resetScreen () {
    let display = document.querySelector('.screen');
    calculator.removeChild(display);
    const screen = document.createElement('div');
    screen.classList.add('screen');
    screen.textContent = displayNumber;
    calculator.appendChild(screen);
}

//Operator functions
function operate (a, b, operator) {
    if (operator == '+') {
        return addition(a, b);
    } else if (operator == '-') {
        return subtraction(a, b); 
    } else if (operator == '/') {
        return divide(a, b);  
    } else {
        return multi(a, b);
    }     
}

function addition (x, y) {
    return x + y;
};

function subtraction (x, y) {
    return x - y;
};
  
function multi (x, y) {
    return x * y;
}
  
function divide (x, y) {
    return x / y;
}
  