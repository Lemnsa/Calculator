// eval function
function myEval (arr) {
    let operator = arr[1];
    let a = Number(arr[0]);
    let b = Number(arr[2]);

    if(operator === '+') {
        return add(a, b);
    }
    else if(operator === '-') {
        return subtract(a, b);
    }
    else if (operator === 'x') {
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}

// operation functions

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    if(b === 0) {
        return 'Critical Error!';
    }
    return a / b;
}


// function to get a factorial of a number
function factorial (num) {
    if (num === 1 || num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
 }

//  function to calculate a percentage of a num
function percentage (num) {
    return (num / 100).toFixed(2); // to 2 decimal places
}

let displayValue = '0',
pendingValue,
evalStringArray = [];



// convert div node list to array
let numbers = document.querySelectorAll(".number");
let numbersArray = Array.from(numbers);
let operators = document.querySelectorAll("div.operator");
let operatorsArray = Array.from(operators);


let display1 = document.querySelector(".first");
let displayOperator = document.querySelector(".operator");
let display2 = document.querySelector(".screen");

let clearButton = document.querySelector(".buttons .red");

let decimalButton = document.querySelector(".green.decimal");

// adding an eventlistener to each number
    numbersArray.forEach(btn => 
        btn.addEventListener("click", displayContent)
    )

// adding an event listener to the operators
operatorsArray.forEach(operator => 
        operator.addEventListener("click", operate)
    
)

function displayContent (e) {
    let btnText = e.target.innerText;
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += btnText;
    display1.innerText = displayValue;
}

// operation 
function operate  (e) {
    let operator = e.target.innerText;

    switch(operator) {
        case '+':
            pendingValue = displayValue;
            displayValue = '0';
           display1.innerText = displayValue;

            evalStringArray.push(pendingValue);
            evalStringArray.push('+');
            break;

            case '-':
                pendingValue = displayValue;
                displayValue = '0';
               display1.innerText = displayValue;
        
                evalStringArray.push(pendingValue);
                evalStringArray.push('-');
                break;

            case '/':
                pendingValue = displayValue;
                displayValue = '0';
               display1.innerText = displayValue;

                evalStringArray.push(pendingValue);
                evalStringArray.push('/');
                break;

            case 'x':
                    pendingValue = displayValue;
                    displayValue = '0';
                   display1.innerText = displayValue;
            
                    evalStringArray.push(pendingValue);
                    evalStringArray.push('*');
                    break;

            case '!':
                         pendingValue = Number(displayValue);
                        displayValue = factorial(pendingValue);
                       display2.innerText = displayValue;
                        
                    break;

            case '%':
                pendingValue = Number(displayValue);
                displayValue = percentage(pendingValue);
                display2.innerText = displayValue;
                break;

            case '=':
                evalStringArray.push(displayValue);
                var evaluation = myEval(evalStringArray);
                displayValue = evaluation + '';
                display2.innerText = displayValue;
                console.log(evalStringArray);
                evalStringArray = []; // empty the array
                break;
            
            default: 
                 break;
    }


}


// clear everything

 clearButton.addEventListener("click", function (){
    displayValue = '0';
    display2.innerHTML = displayValue;
    pendingValue = undefined;
    evalStringArray = [];
    display1.innerHTML = displayValue;
 });


// add decimal to a number

decimalButton.addEventListener("click", addDecimalPoint);

function addDecimalPoint() {
    if(displayValue.includes('.')) {
        return;
    }
    else {
        displayValue += '.';
    }

    display1.innerText = displayValue;
}