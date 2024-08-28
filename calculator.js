const add = function (a, b) {
    return a + b;
}
// console.log("the sum is "+ add(2,4));

const subtract = function (a, b) {
    return a - b;
}
// console.log("the minus is "+ subtract(2,4));

const multiply = function (a, b) {
    return a * b;
}
// console.log("the product is "+ multiply(2,4));

const divide = function (a, b) {
    return a / b;
}
// console.log("the division is "+ divide(2,4));
// debugger;
let num1 = Number(prompt("Enter a number")),
operator = prompt("choose an operator sign"),
num2 = Number(prompt("Enter the second number"));

let answer = operate(operator,num1,num2);
console.log(answer);

function operate (op, a, b) {
    switch (op) {
        default:
           return alert("You have to enter a valid operation!");
            break;
        case '+':
            return add(a,b);
            // console.log("we adding "+add(a,b));
            break;
        case '-':
            return subtract(a, b);
            // console.log("subtract");
            break;
        case '/':
            return divide(a, b);
            // console.log("we are dividing ");
            break;
        case 'x':
           return multiply(a, b);
            // console.log("multiply");
            break;
    }
}
