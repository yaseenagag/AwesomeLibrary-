"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object) {
  var target = object || {};
  return Object.keys(target).length;
};