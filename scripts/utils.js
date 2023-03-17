function controlOperationctive() {
  if (isOperationActive) {
    setDisplayValue(this.textContent);
  }
  isOperationActive = false;
}

function concatNumber(number, value) {
  const concatedValue = String(value).concat(number);

  return parseFloat(concatedValue);
}

function setValue(value) {
  displayValue = value;
}

function setDisplayValue(value) {
  display.textContent = value;
}

function clearActiveOperatorHighlight() {
  operators.forEach((button) => {
    button.classList.remove("btn-active");
  });
}

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function resetValue() {
  displayValue = 0;
}

function setResult() {
  result = switchOperation();
}

function switchOperation() {
  switch (activeOperation) {
    case "+":
      return sum(accumulator, displayValue);
    case "-":
      return subtract(accumulator, displayValue);
    default:
      return displayValue;
  }
}

function globalLogs(message) {
  // console.clear();

  console.log("---------");

  if (message) console.log(message);
  console.log("ACCUMULATOR", accumulator);
  console.log("RESULT", result);
  console.log("VALUE", displayValue);
  console.log("DISPLAY", display.textContent);
  console.log("OPERATION", activeOperation);

  console.log("---------");
}

function checkMaxDigits() {
  console.log(displayValue);
  const stringfyValue = String(displayValue);

  const importantDigit = stringfyValue[0];
  const expoent = 3;
  const restOfDigits = stringfyValue.slice(1, 6);

  if (display.textContent.length > 9) {
    const formattedValue = `${importantDigit}.${restOfDigits}e${expoent}`;

    console.log(formattedValue);

    display.textContent = formattedValue;
  }
}
