const myArray = [1, 34, 23, 12, 6, 3];

let max = myArray[0];


for (let index = 0; index < myArray.length; index++) {
  if (myArray[index] > max) {
    max = myArray[index];}
}
export { max }