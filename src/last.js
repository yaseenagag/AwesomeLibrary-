const last = ( collection, iteratee ) => {
   for( let key in collection ) {
    let lastVal = [];
    if (collection[key] > lastVal) {
      lastVal = collection[key];
   }
return lastVal
 }
}


export { last }