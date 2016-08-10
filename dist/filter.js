"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filter = function filter(list, predicate) {
  var result = [];
  for (var index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      result.push(list[index]);
    }
  }
  return result;
};

exports.filter = filter;