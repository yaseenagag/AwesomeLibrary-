
const max = ( collection, iteratee ) => {
  let maxVal = collection[0];
   for( let key in collection ) {
    if (collection[key] > maxVal) {
      maxVal = collection[key];
    }
   }

 return maxVal
}


export { max }