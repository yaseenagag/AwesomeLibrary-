"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, iteratee) {
  var minVal = collection[0];
  for (var key in collection) {
    if (collection[key] < minVal) {
      minVal = collection[key];
    }
    return minVal;
  }
};