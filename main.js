const allNumbers = document.querySelector('.numbers');
const allOperators = document.querySelector('.operators');

let displayNumber = 0;
let firstNumber = 0;
let secondNumber = 0; 
let operation = "";
let calculator = document.querySelector('.top');
let display = document.querySelector('.screen');
display.textContent = displayNumber;

//eventlisteners
//USE THE STORED OPERATION VALUE TO KNOW WHICH OPERATOR TO USE WHEN SWITCHING
allOperators.addEventListener('click', () => {
    if (event.target.textContent == '+') {
        operation = '+';
        firstNumber = displayNumber;
        displayNumber = "";
        resetScreen();
    } else if (event.target.textContent == '-') {
        operation = '-';
        firstNumber = displayNumber;
        displayNumber = "";
        resetScreen();
    } else if (event.target.textContent == '*') {
        operation = '*';
        firstNumber = displayNumber;
        displayNumber = "";
        resetScreen();
    } else if (event.target.textContent == '/') {
        operation = '/';
        firstNumber = displayNumber;
        displayNumber = "";
        resetScreen();
    } else if (event.target.textContent == '=') {
        displayNumber = operate(parseInt(firstNumber, 10), parseInt(displayNumber, 10), operation);
        resetScreen();
    } else {
        displayNumber = 0;
        firstNumber = 0;
        operation = "";
        resetScreen ();    
    }
})

allNumbers.addEventListener('click', () => {
    if (event.target.textContent == '1') {
        displayNumber = (displayNumber == 0) ? displayNumber + 1 : displayNumber + '1';
        resetScreen();    
    } else if (event.target.textContent == '2') {
        displayNumber = (displayNumber == 0) ? displayNumber + 2 :displayNumber + '2';
        resetScreen();
    } else if (event.target.textContent == '3') {
        displayNumber = (displayNumber == 0) ? displayNumber + 3 :displayNumber + '3';
        resetScreen();
    } else if (event.target.textContent == '4') {
        displayNumber = (displayNumber == 0) ? displayNumber + 4 :displayNumber + '2';
        resetScreen();
    } else if (event.target.textContent == '5') {
        displayNumber = (displayNumber == 0) ? displayNumber + 5 :displayNumber + '5';
        resetScreen();
    } else if (event.target.textContent == '6') {
        displayNumber = (displayNumber == 0) ? displayNumber + 6 :displayNumber + '6';
        resetScreen();
    } else if (event.target.textContent == '7') {
        displayNumber = (displayNumber == 0) ? displayNumber + 7 :displayNumber + '7';
        resetScreen();
    } else if (event.target.textContent == '8') {
        displayNumber = (displayNumber == 0) ? displayNumber + 8 :displayNumber + '8';
        resetScreen();
    } else if (event.target.textContent == '9') {
        displayNumber = (displayNumber == 0) ? displayNumber + 9 :displayNumber + '9';
        resetScreen();
    } else {
        displayNumber = (displayNumber == 0) ? displayNumber + 0 : displayNumber + '0'; 
        resetScreen();
    }
})

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
  
// Each button contains some value, right? It can be a digit or operator key. Just check for it.
// Or you can add one handler to number keys and another handler to operator keys.

// also I feel like there's probably a more elegant way of adding EventListeners rather than just making an individual one for each button
// Read about event delegation. 
