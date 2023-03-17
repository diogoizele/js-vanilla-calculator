let displayValue = 0;
let accumulator = 0;
let isOperationActive = false;
let applyOperation = true;
let activeButtonOperation = null;
let activeOperation = null;
let result = 0;

display.textContent = displayValue;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    const concatedNumber = concatNumber(number, displayValue);

    setValue(concatedNumber);
    setDisplayValue(displayValue);

    // if (activeOperation) {
    //   applyOperation = false;
    //   recursiveOperations(activeOperation);
    //   activeOperation = null;
    // } else {
    //   applyOperation = true;
    // }

    globalLogs();
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.textContent;
    setResult();

    console.log("RESULT");

    activeOperation = operation;
    accumulator = result;

    resetValue();

    setDisplayValue(accumulator);

    // recursiveOperations(operation);

    // setDisplayValue(accumulator);
    // resetValue();

    globalLogs();
  });
});

function recursiveOperations(operation) {
  switch (operation) {
    case "=":
      recursiveOperations(activeOperation);
      activeOperation = null;
      break;
    case "+":
      if (applyOperation) accumulator = sum(accumulator, displayValue);
      activeOperation = operation;
      break;
    case "-":
      if (applyOperation) accumulator = subtract(accumulator, displayValue);
      activeOperation = operation;
      break;
  }

  // console.log("O acumulador ficou com:", accumulator);
}
