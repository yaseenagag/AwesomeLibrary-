"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, iteratee) {
  var fn = iteratee || function () {};

  for (var key in collection) {
    fn(collection[key], key, collection);
  }

  return collection;
};

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