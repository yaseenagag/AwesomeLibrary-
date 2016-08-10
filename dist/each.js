"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var each = function each(collection, iteratee) {
  var fn = iteratee || function () {};

  for (var key in collection) {
    fn(collection[key], key, collection);
  }

  return collection;
};

exports.each = each;

// AND
// X Y A
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1

// OR
// X Y A
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1

// NOT
// X A
// 0 1
// 1 0