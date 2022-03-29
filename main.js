const allNumbers = document.querySelector('.numbers');
const allOperators = document.querySelector('.operators');
const calculator = document.querySelector('.top');
const display = document.querySelector('.screen');
const deciButton = document.querySelector('.decimal');
const one = document.querySelector('.one');

let displayNumber = 0;
let savedNumber = 0;
let operation = "";
display.textContent = displayNumber;

//clicking eventlisteners
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
});

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

//typing eventlisteners
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 49 || e.keyCode === 97){
        one.style.backgroundColor = "red";
        updateNumber(1);
    } else if (e.keyCode === 50 || e.keyCode === 98){
        updateNumber(2);
    } else if (e.keyCode === 51 || e.keyCode === 99){
        updateNumber(3);
    } else if (e.keyCode === 52 || e.keyCode === 100){
        updateNumber(4);
    } else if (e.keyCode === 53 || e.keyCode === 101){
        updateNumber(5);
    } else if (e.keyCode === 54 || e.keyCode === 102){
        updateNumber(6);
    } else if (e.keyCode === 55 || e.keyCode === 103){
        updateNumber(7);
    } else if (e.keyCode === 56 || e.keyCode === 104){
        updateNumber(8);
    } else if (e.keyCode === 57 || e.keyCode === 105){
        updateNumber(9);
    } else if (e.keyCode === 48 || e.keyCode === 96){
        updateNumber(0);
    } else if (e.keyCode === 190 || e.keyCode === 110){
        decimalButton();
    } else if (e.keyCode === 8 || e.keyCode === 46){
        delButton();
    } else if (e.keyCode === 107){
        operateButton('+');
    } else if (e.keyCode === 109){
        operateButton('-');
    } else if (e.keyCode === 106){
        operateButton('*');
    } else if (e.keyCode === 111){
        operateButton('/');
    } else if (e.keyCode === 13){
        equalsButton();
    } else;
});    



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
  
