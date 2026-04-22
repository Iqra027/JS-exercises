function operate(a,b, callback) {
    return callback(a, b);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}

console.log("Addition:", operate(5, 3, add));        // Output: 8
console.log("Subtraction:", operate(5, 3, subtract)); // Output: 2
console.log("Multiplication:", operate(5, 3, multiply)); // Output: 15
console.log("Division:", operate(5, 3, Divide)); // Output: 1.666...
