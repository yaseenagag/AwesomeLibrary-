"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var find = function find(list, predicate) {
  var fn = predicate || function (a) {
    return a;
  };

  for (var index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return list[index];
    }
  }

  return undefined;
};

exports.find = find;