class CalculatorService {
  constructor(display) {
    this._value = 0;
    this._accumulator = 0;
    this._result = 0;
    this._display = display;
    this._operation = null;

    this._initialize();

    this.setValue = this.setValue.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.setResult = this.setResult.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.setResultToAccumulator = this.setResultToAccumulator.bind(this);
    this.getAccumulator = this.getAccumulator.bind(this);
    this.switchOperation = this.switchOperation.bind(this);
    this.__NO_USE_forceResult = this.__NO_USE_forceResult.bind(this);
  }

  _initialize() {
    this._display.textContent = this._value;
  }

  setValue(value) {
    this._value = value;
  }

  getValue() {
    return this._value;
  }

  getDisplay() {
    return this._display.textContent;
  }

  getResult() {
    return this._result;
  }

  getOperation() {
    return this._operation;
  }

  setDisplayValue(value) {
    if (value === Infinity) return (this._display.textContent = "Error");
    if (String(value).length > 9) {
      return (this._display.textContent = String(value).slice(0, 9));
    }
    this._display.textContent = value;
  }

  setOperation(operation) {
    this._operation = operation;
  }

  setResult() {
    this._result = this.switchOperation();
  }

  resetValue() {
    this._value = 0;
  }

  setResultToAccumulator() {
    this._accumulator = this._result;
  }

  getAccumulator() {
    return this._accumulator;
  }

  switchOperation() {
    switch (this._operation) {
      case "=":
        this.setOperation(null);
        return this._result;
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
        const inverse = OperationsService.inverse(this._accumulator);
        this.setOperation(null);
        return inverse;
      default:
        return this._value;
    }
  }

  __NO_USE_forceResult(value) {
    console.log("VALOR EE", value);
    this._result = value;
  }
}
