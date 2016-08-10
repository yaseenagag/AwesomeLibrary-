"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var each = function each(collection, transform) {
  var result = [];
  var value = [];
  for (var index = 0; index < collection.length; index++) {
    var _transform = function _transform() {};
    value = _transform(collection[index]);
    result.push(value);
  }
  return result;
};

exports.each = each;