"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn, hashFunction) {
  var table = {};
  var hash = hashFunction || function (array) {
    return array[0];
  };

  return function () {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    var key = hash(inputs);

    if (table[key] === undefined) {
      table[key] = fn.apply(undefined, inputs);
    }

    return table[key];
  };
};