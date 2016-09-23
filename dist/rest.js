'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (typeof array === 'string') {
    return array.slice(index).split('');
  }

  return array.slice(index);
};