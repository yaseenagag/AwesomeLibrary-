'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var memoize = function memoize(fn) {
  var table = {};

  return function () {
    console.log('---', _arguments);

    // fn( ...arguments )
  };
};

exports.memoize = memoize;