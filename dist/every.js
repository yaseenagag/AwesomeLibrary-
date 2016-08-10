"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var every = function every(list, predicate) {
  var status = true;
  for (var index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      return true;
    }
    if (predicate(list[index])) {
      return false;
    }
  }
};

exports.every = every;