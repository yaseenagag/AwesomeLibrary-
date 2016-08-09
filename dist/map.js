"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var map = function map(collection, transform) {
  var result = [];

  for (var index = 0; index < collection.length; index++) {
    var value = transform(collection[index]);
    result.push(value);
  }

  return result;
};

exports.map = map;