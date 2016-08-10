"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var last = function last(collection, iteratee) {
  for (var key in collection) {
    var lastVal = [];
    if (collection[key] > lastVal) {
      lastVal = collection[key];
    }
    return lastVal;
  }
};

exports.last = last;