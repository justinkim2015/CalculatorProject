const allNumbers = document.querySelector('.numbers');
const allOperators = document.querySelector('.operators');
const calculator = document.querySelector('.top');
const display = document.querySelector('.screen');
const deciButton = document.querySelector('.decimal');

let displayNumber = 0;
let savedNumber = 0;
let operation = "";
display.textContent = displayNumber;

//eventlisteners
allOperators.addEventListener('click', () => {
    if (event.target.textContent == '+') {
        operateButton('+');
    } else if (event.target.textContent == '-') {
        operateButton('-');
    } else if (event.target.textContent == '*') {
        operateButton('*');
    } else if (event.target.textContent == '/') {
        divideButton();
    } else if (event.target.textContent == '=') {
        equalsButton();
    } else if (event.target.textContent == 'Del') {
        delButton();
    } else {
        displayNumber = 0;
        savedNumber = 0;
        operation = "";
        resetScreen();
    }
})

allNumbers.addEventListener('click', () => {
    if (event.target.textContent == '1') {
        updateNumber(1);
    } else if (event.target.textContent == '2') {
        updateNumber(2);
    } else if (event.target.textContent == '3') {
        updateNumber(3);
    } else if (event.target.textContent == '4') {
        updateNumber(4);
    } else if (event.target.textContent == '5') {
        updateNumber(5);
    } else if (event.target.textContent == '6') {
        updateNumber(6);
    } else if (event.target.textContent == '7') {
        updateNumber(7);
    } else if (event.target.textContent == '8') {
        updateNumber(8);
    } else if (event.target.textContent == '9') {
        updateNumber(9);
    } else if (event.target.textContent == '.') {
        decimalButton();
    } else {
        updateNumber(0);
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
};

function updateNumber (num) {
    displayNumber = (displayNumber == 0) ? displayNumber + num : displayNumber + `${num}`;
    resetScreen();        
};

function operateButton(operator) {
    deciButton.disabled = false;
    if ((displayNumber == 0 || savedNumber == 0) && operation == '/') {
        noZero()
    } else if (displayNumber == 0 || savedNumber == 0) {
        operation = `${operator}`;
        savedNumber = displayNumber;
        displayNumber = "";
    } else {
        displayNumber = operate(parseFloat(savedNumber, 10), parseFloat(displayNumber, 10), operation)
        resetScreen();
        savedNumber = displayNumber
        displayNumber = "";
        operation = `${operator}`;
    }
};

function divideButton() {
    if ((displayNumber == 0 || savedNumber == 0) && operation == '/') {
        noZero()
    } else if (displayNumber == 0 || savedNumber == 0) {
        operation = `/`;
        savedNumber = displayNumber;
        displayNumber = "";
    } else {
        displayNumber = operate(parseFloat(savedNumber, 10), parseFloat(displayNumber, 10), operation)
        resetScreen();
        savedNumber = displayNumber
        displayNumber = "";
        operation = `/`;
    }
};

function equalsButton() {
    if ((displayNumber == 0) && operation == '/') {
        displayNumber = 'plsstop';
        resetScreen();
    } else {  
        displayNumber = operate(parseFloat(savedNumber, 10), parseFloat(displayNumber, 10), operation); 
        savedNumber = 1; //displayed answer is multiplied by 1 if the user presses = again so it remains the same
        operation = '*'
        resetScreen();
    } 
};

function noZero() {
        operation = '/';
        displayNumber = 'plsstop';
        resetScreen();
}

function delButton() {
    displayNumber = displayNumber.slice(0, -1);
    resetScreen()
}

function decimalButton () {
    let decimalCheck = displayNumber.indexOf('.')
    if (decimalCheck !== -1) {
        deciButton.disabled = true;
    } else {
        displayNumber = displayNumber + '.';
        resetScreen()
    }
}
//math functions
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
  
