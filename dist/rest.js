'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rest = function rest(array) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (typeof array === 'string') {
    return array.slice(index).split('');
  }

  return array.slice(index);
};

exports.rest = rest;