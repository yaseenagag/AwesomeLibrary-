const max = ( array, iteratee ) => {
  let maxVal = array[0];
   for( let el of array ) {
    if (array[el] > maxVal) {
    maxVal = array[el];
    }
   }
return maxVal
}


export { max }