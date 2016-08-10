const max = ( collection, iteratee ) => {
   for( let key in collection ) {
    let maxVal = [];
    if (collection[key] > maxVal) {
    maxVal = collection[key];
    collection.push(maxVal)
   }
return maxVal
 }
}
export { max }