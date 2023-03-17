class OperationsService {
  static sum(accumulator, value) {
    return accumulator + value;
  }

  static subtract(accumulator, value) {
    return accumulator - value;
  }

  static multiply(accumulator, value) {
    return accumulator * value;
  }

  static divide(accumulator, value) {
    return accumulator / value;
  }

  static inverse(accumulator) {
    return accumulator * -1;
  }

  static percent(accumulator) {
    return accumulator / 100;
  }
}
