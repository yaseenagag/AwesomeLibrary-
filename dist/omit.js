"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (object, attribute) {
  if (attribute === null || attribute === undefined) {
    return {};
  } else if (object instanceof Array) {
    return [].concat(_toConsumableArray(object.slice(0, attribute)), _toConsumableArray(object.slice(attribute + 1)));
  } else {
    for (var key in object) {
      if (key == attribute) {
        delete object[key];
      }
    }
  }

  return object;
};