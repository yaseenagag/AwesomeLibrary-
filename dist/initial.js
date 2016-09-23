'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (!(array instanceof Array || typeof array === 'string')) {
    return [];
  }

  var result = [];

  for (var index = 0; index < array.length - n; index++) {
    result.push(array[index]);
  }

  return result;
};