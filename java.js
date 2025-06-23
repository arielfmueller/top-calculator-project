// Basic math functions

function add(a, b) {
  // add
  return +a + +b;
}

function subtract(a, b) {
  // subtract
  return +a - +b;
}

// multiply
function multiply(a, b) {
  // multiply
  return +a * +b;
}

function divide(a, b) {
  // divide
  return +a / +b;
}

// Variables for the operations
let firstInput = "";
let operator = "";
let secondInput = "";
let result = "";

// Function to perform the operation
function operate(a, op, b) {
  console.log("a:", a, "op:", op, "b:", b);
  if (op == "+") {
    return add(a, b);
  } else if (op == "-") {
    return subtract(a, b);
  } else if (op === "x") {
    return multiply(a, b);
  } else if (op === "%") {
    return divide(a, b);
  } else return "ERROR";
}

// Linking elements
const clear = document.querySelector("#clear");

const display = document.querySelector("#display");
display.textContent = "0";

const powerBtn = document.querySelector("#power");

// Function for the button clear
clear.addEventListener("click", () => {
  if (display.textContent != "") {
    return (display.textContent = "0");
  }
});

// Function for the power button
powerBtn.addEventListener("click", () => {
  if (display.textContent != "") {
    return display.textContent = ""
  } else {
    return display.textContent = "0"
  }
});

// Function for buttons
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // e.target.textContent gives you the button's value
    display.textContent = ""
    display.textContent = e.target.textContent;
    if (firstInput == null || firstInput == "") {
      firstInput += e.target.textContent
      console.log(firstInput)
      console.log(secondInput)
    } else if (!operator) {
      display.textContent = "Choose an operator!";
    } else { 
      secondInput = e.target.textContent;
      console.log(firstInput)
      console.log(secondInput)
    }
  });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = ""
    if (firstInput == null || firstInput == "") {
      display.textContent = "Choose an initial input"
    } else {
      display.textContent = firstInput
      operator = e.target.textContent
      console.log(operator)
    }
  });
});

const equalButton = document.querySelectorAll(".equal");
equalButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!firstInput && !secondInput) {
      display.textContent = "0"
    } else {
      result = operate(firstInput, operator, secondInput)
      display.textContent = result
      console.log(result)
    }
  });
});
