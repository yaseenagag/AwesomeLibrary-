"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (list, predicate) {
  var target = list || [];

  for (var index = 0; index < target.length; index++) {
    if (!predicate(target[index])) {
      return false;
    }
  }

  return true;
};