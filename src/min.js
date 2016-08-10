const min = ( collection, iteratee ) => {
   for( let key in collection ) {
    let minVal = [3];
    if (collection[key] < minVal) {
    minVal = collection[key];
    collection.push(minVal)
   }
return minVal
 }
}



export { min }