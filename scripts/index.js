const calculator = new CalculatorService(display);
const specialOperators = ["C", "+/-", "%"];

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    const isPoint = number === ".";
    const concatedNumber = concatNumber(number, calculator.getValue());
    const value = Number(calculator.getDisplay()) + ".";

    if (isPoint && calculator.getDisplay().includes(".")) {
      return;
    }

    if (isPoint) {
      calculator.setDisplayValue(value);
      calculator.setValue(value);
    } else {
      calculator.setValue(concatedNumber);
      calculator.setDisplayValue(calculator.getValue());
    }
    varValue.textContent = calculator.getValue();
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.textContent;

    calculator.setResult();
    varResult.textContent = calculator.getResult();
    calculator.setOperation(operation);
    varOperation.textContent = calculator.getOperation();
    calculator.setResultToAccumulator();
    varAccumulator.textContent = calculator.getAccumulator();
    calculator.resetValue();
    varValue.textContent = calculator.getValue();
    if (!specialOperators.includes(operation)) {
      calculator.setDisplayValue(calculator.getAccumulator());
    } else {
      if (operation === "+/-") {
        calculator.setValue(+display.textContent * -1);
        calculator.setDisplayValue(calculator.getValue());
      } else if (operation === "%") {
        calculator.setValue(+display.textContent / 100);
        calculator.setDisplayValue(calculator.getValue());
      } else if (operation === "C") {
        calculator.setValue(0);
        calculator.setDisplayValue(calculator.getValue());
      }
    }
    varValue.textContent = calculator.getValue();
  });
});
