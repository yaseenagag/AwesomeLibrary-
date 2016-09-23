"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (list, predicate) {

  for (var index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return index;
    }
  }

  return -1;
};