'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isString = function isString(input) {
  if (typeof input == null) {
    return false;
  } else if (typeof input == 'undefined') {
    return false;
  } else if (!(input instanceof Array || typeof input === 'string')) {
    return false;
  } else if (input instanceof Array) {
    return false;
  } else {
    return true;
  }
};

exports.isString = isString;