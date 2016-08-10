"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var max = function max(collection, iteratee) {
  for (var key in collection) {
    var maxVal = [];
    if (collection[key] > maxVal) {
      maxVal = collection[key];
      collection.push(maxVal);
    }
    return maxVal;
  }
};
exports.max = max;