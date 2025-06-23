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

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelectorAll(".equal");

// Function for the button clear
clear.addEventListener("click", () => {
  firstInput = "";
  operator = "";
  secondInput = "";
  result = "";
  display.textContent = "0";
  console.log(`firstInput: ${firstInput}`);
  console.log(`operator: ${operator}`);
  console.log(`secondInput: ${secondInput}`);
  console.log(`result: ${result}`);
});

// Function for the power button
let isOn = false;
const allButtons = document.querySelectorAll("button:not(#power)");
allButtons.forEach(btn => btn.disabled = true);
display.textContent = "OFF";
powerBtn.addEventListener("click", () => {
  isOn = !isOn;
  allButtons.forEach(btn => btn.disabled = !isOn)
  display.textContent = isOn ? "0" : "OFF";
  firstInput = "";
  operator = "";
  secondInput = "";
  result = "";
});

// Function for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = "";
    if (result && !operator) {
      firstInput = "";
      firstInput += e.target.textContent;
      display.textContent = firstInput;
    } else if (!operator) {
      firstInput += e.target.textContent;
      display.textContent = firstInput;
      console.log(`firstInput: ${firstInput}`);
      console.log(`secondInput: ${secondInput}`);
    } else {
      secondInput += e.target.textContent;
      display.textContent += secondInput;
      console.log(`firstInput: ${firstInput}`);
      console.log(`secondInput: ${secondInput}`);
    }
  });
});

// Function for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = "";
    if (firstInput == null || firstInput == "") {
      display.textContent = "Choose an initial input";
    } else {
      display.textContent = firstInput;
      operator = e.target.textContent;
      console.log(`operator: ${operator}`);
    }
  });
});

//Function for equal button
equalButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!firstInput && !secondInput) {
      display.textContent = "0";
      // } else if (!result == null || !result == "") {
    } else {
      result = operate(firstInput, operator, secondInput);
      display.textContent = result;
      firstInput = result;
      operator = "";
      secondInput = "";
      console.log(`result: ${result}`);
    }
  });
});
