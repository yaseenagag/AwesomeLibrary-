"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initial = function initial(array, n) {
  //   while (n > 0) {
  //    n--
  //    initialValues.unshift(array.pop());
  //   }
  // return initialValues;

  return array.slice(Math.max(array.length - n, n));
};

exports.initial = initial;