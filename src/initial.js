const initial = (array, n) => {
//   while (n > 0) {
//    n--
//    initialValues.unshift(array.pop());
//   }
// return initialValues;

  return array.slice( Math.max(array.length - n, n))
}

export { initial }