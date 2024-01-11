console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  const NumberA = Number(dataObject.numberA);
  const NumberB = Number(dataObject.numberB);
  const operator = dataObject.operator;
  if (operator === "subtraction") {
    result = subtract(NumberA, NumberB);
  } else if (operator === "multiplication") {
    result = multiply(NumberA, NumberB);
  } else if (operator === "division") {
    result = divide(NumberA, NumberB);
  } else {
    result = add(NumberA, NumberB);
  }

  resultOutput.textContent = result;
});
