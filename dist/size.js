"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var size = function size(object) {
  var target = object || {};
  return Object.keys(target).length;
};

exports.size = size;