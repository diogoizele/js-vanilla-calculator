function concatNumber(number, value) {
  const concatedValue = String(value).concat(number);

  return parseFloat(concatedValue);
}

function isFloat(num) {
  return num % 1 !== 0;
}
