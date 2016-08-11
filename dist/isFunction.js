'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isFunction = function isFunction(fn) {
  if (typeof fn == 'undefined') return false;
  if (fn instanceof Array) return false;
  if (fn instanceof Object) return false;
  if (typeof fn === 'string' || fn instanceof String) return false;
  if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) == function () {}) return true;
  return false;
};

exports.isFunction = isFunction;