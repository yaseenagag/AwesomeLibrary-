"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var min = function min(collection, iteratee) {
  for (var key in collection) {
    var minVal = [3];
    if (collection[key] < minVal) {
      minVal = collection[key];
      collection.push(minVal);
    }
    return minVal;
  }
};

exports.min = min;