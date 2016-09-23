export default function (array, n) {
const lastValues = [];
  while (n > 0) {
   n--
   lastValues.unshift(array.pop());
  }
return lastValues;
}
