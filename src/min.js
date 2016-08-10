const min = ( collection, iteratee ) => {
  let minVal = collection[0];
   for( let key in collection ) {
    if (collection[key] < minVal) {
    minVal = collection[key];
   }
return minVal
 }
}



export { min }