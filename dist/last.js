"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, n) {
  var lastValues = [];
  while (n > 0) {
    n--;
    lastValues.unshift(array.pop());
  }
  return lastValues;
};