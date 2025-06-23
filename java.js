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

const dot = document.querySelector(".dot");

// Function for the button clear
clear.addEventListener("click", () => {
  firstInput = "";
  operator = "";
  secondInput = "";
  result = "";
  display.textContent = "0";
});

// Function for the power button
let isOn = false;
const allButtons = document.querySelectorAll("button:not(#power)");
allButtons.forEach((btn) => (btn.disabled = true));
display.textContent = "OFF";
powerBtn.addEventListener("click", () => {
  isOn = !isOn;
  allButtons.forEach((btn) => (btn.disabled = !isOn));
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
    if (result !== "" && !operator) {
      result = "";
      firstInput = "";
      firstInput += e.target.textContent;
      display.textContent = firstInput;
    } else if (!operator) {
      firstInput += e.target.textContent;
      display.textContent = firstInput;
    } else {
      secondInput += e.target.textContent;
      display.textContent += secondInput;
    }
  });
});

// Function for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent = "";
    if (firstInput !== "" && operator && secondInput !== "") {
      result = operate(firstInput, operator, secondInput);
      firstInput = result.toString();
      operator = e.target.textContent;
      secondInput = "";
      display.textContent = firstInput;
    } else if (result == "0" && e.target.textContent == "-") {
      operator = e.target.textContent;
      display.textContent = "";
    } else if (
      e.target.textContent === "-" &&
      (firstInput == null || firstInput == "")
    ) {
      firstInput = e.target.textContent;
      display.textContent = firstInput;
    } else if (firstInput == null || firstInput == "") {
      operator = "";
      display.textContent = "0";
    } else {
      operator = e.target.textContent;
      display.textContent = "";
      console.log(`operator: ${operator}`);
    }
  });
});

//Function for rounding results to 2 decimal places
function formatResult(num) {
  if (Number.isInteger(num)) {
    return num;
  } else {
    return Number(num.toFixed(2));
  }
}

//Function for equal button
equalButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!firstInput && !secondInput) {
      display.textContent = "0";
    } else if (firstInput && !operator) {
      display.textContent = firstInput;
    } else {
      result = operate(firstInput, operator, secondInput);
      result = formatResult(result);
      display.textContent = result;
      firstInput = result;
      operator = "";
      secondInput = "";
    }
  });
});

// Function for decimal numbers
dot.addEventListener("click", (e) => {
  if (
    (firstInput === null || firstInput === "") &&
    display.textContent === "0" &&
    !firstInput.includes(".")
  ) {
    firstInput += "0.";
    display.textContent = firstInput;
    } else if (firstInput !== "" && !operator && !firstInput.includes(".")) {
    firstInput += ".";
    display.textContent = firstInput;
  } else if (
    firstInput !== "" &&
    operator &&
    secondInput == "" &&
    !secondInput.includes(".")
  ) {
    secondInput += "0.";
    display.textContent = secondInput;
  } else if (
    firstInput !== "" &&
    operator &&
    secondInput !== "" &&
    !secondInput.includes(".")
  ) {
    secondInput += ".";
    display.textContent = secondInput;
  }
});
