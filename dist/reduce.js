'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input, iteratee, memo) {
  if (!input) {
    return memo;
  }

  var result = memo;

  for (var key in input) {
    if (result || result === '') {
      result = iteratee(result, input[key], key, input);
    } else {
      result = input[key];
    }
  }

  return result;
};