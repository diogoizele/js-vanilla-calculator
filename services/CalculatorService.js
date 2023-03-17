class CalculatorService {
  constructor(display) {
    this._value = 0;
    this._accumulator = 0;
    this._result = 0;
    this._display = display;
    this._operation = null;

    this._initialize();
  }

  _initialize() {
    this._display.textContent = this._value;
  }

  setValue(value) {
    this._value = value;
  }

  setDisplayValue(value) {
    this._display.textContent = value;
  }

  setOperation(operation) {
    this._operation = operation;
  }

  setResult() {
    result = switchOperation();
  }

  resetValue() {
    this._value = 0;
  }

  switchOperation() {
    switch (this._operation) {
      case "+":
        return OperationsService.sum(this._accumulator, this._value);
      case "-":
        return OperationsService.subtract(this._accumulator, this._value);
      case "*":
        return OperationsService.multiply(this._accumulator, this._value);
      case "/":
        return OperationsService.divide(this._accumulator, this._value);
      case "%":
        return OperationsService.percent(this._accumulator);
      case "+/-":
        return OperationsService.inverse(this._accumulator);

      default:
        return this._value;
    }
  }
}
