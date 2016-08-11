'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = function isArray(input) {
  if (typeof input == 'undefined') return false;
  if (input instanceof Object) return false;
  if (typeof input === 'string' || input instanceof String) return false;
  if (input instanceof Array) return true;
  return false;
};

exports.isArray = isArray;