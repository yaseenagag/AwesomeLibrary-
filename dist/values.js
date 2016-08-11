'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var values = function values(object) {
  var values = [];
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
    return values;
  }
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
};

exports.values = values;