"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var max = function max(collection, iteratee) {
  var maxVal = collection[0];

  for (var key in collection) {
    if (collection[key] > maxVal) {
      maxVal = collection[key];
    }
  }

  return maxVal;
};

exports.max = max;