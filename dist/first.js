"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, iteratee) {
  for (var key in collection) {
    var firstVal = [];
    if (collection[key] > firstVal) {
      firstVal = collection[key];
    }
    return firstVal;
  }
};