const lastValues = [];

const last = function (array, n) {
  while (n > 0) {
   n--
   lastValues.unshift(array.pop());
  }
return lastValues;
}

export { last }