let displayNumber = 0;
let calculator = document.querySelector('.top');
let display = document.querySelector('.screen');
display.textContent = displayNumber;

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

//eventlisteners
clearButton.addEventListener('click', function(){
    displayNumber = 0;
    console.log(displayNumber)
    resetScreen ();
});

oneButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 1;
        resetScreen ();
    } else {
        displayNumber = displayNumber + '1';
        resetScreen ();
    }    
    console.log(displayNumber)
}); 

twoButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 2;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '2';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

threeButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 3;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '3';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

fourButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 4;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '4';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

fiveButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 5;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '5';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

sixButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 6;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '6';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

sevenButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 7;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '7';
        resetScreen ()
    }    
    console.log(displayNumber)
}); 

eightButton.addEventListener('click', function() {
    if (displayNumber == 0) {
        displayNumber = displayNumber + 8;
        resetScreen ()
    } else {
        displayNumber = displayNumber + '8';
        resetScreen ()
    }    
    console.log(displayNumber)
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
    return x / b;
}
  