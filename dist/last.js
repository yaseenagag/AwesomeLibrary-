"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lastValues = [];

var last = function last(array, n) {
  while (n > 0) {
    n--;
    lastValues.unshift(array.pop());
  }
  return lastValues;
};

exports.last = last;