'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isString = function isString(input) {
  if (typeof input == null) return false;
  if (typeof input == 'undefined') return false;
  if (input instanceof Array) return false;
  if (typeof input === 'string' || input instanceof String) return true;
  return false;
};

exports.isString = isString;