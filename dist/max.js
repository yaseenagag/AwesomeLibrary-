"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var myArray = [1, 34, 23, 12, 6, 3];

var max = myArray[0];

for (var index = 0; index < myArray.length; index++) {
  if (myArray[index] > max) {
    exports.max = max = myArray[index];
  }
}
exports.max = max;