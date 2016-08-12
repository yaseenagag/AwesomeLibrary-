"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var findIndex = function findIndex(list, predicate) {

  for (var index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return index;
    }
  }

  return -1;
};

exports.findIndex = findIndex;