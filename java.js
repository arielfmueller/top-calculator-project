// Basic math functions

function add(a, b) {
  // add
  return a + b;
}

function subtract(a, b) {
  // subtract
  return a - b;
}

// multiply
function multiply(a, b) {
  // multiply
  return a * b;
}

function divide(a, b) {
  // divide
  return a / b;
}

// Variables for the operations
let a;
let op;
let b;

// Function to perform the operation
function operate(a, op, b) {
  console.log("a:", a, "op:", op, "b:", b);
  if (op == "+") {
    return add(a, b);
  } else if (op == "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  } else return "ERROR";
}

console.log(operate(1, "+", 2));
console.log(operate(1, "-", 2));
console.log(operate(1, "*", 2));
console.log(operate(1, "/", 2));
console.log(operate(1, "**", 2));
