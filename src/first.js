const first = ( collection, iteratee ) => {
   for( let key in collection ) {
    let firstVal = [];
    if (collection[key] > firstVal) {
      firstVal = collection[key];
   }
return firstVal
 }
}


export { first }