'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, transform) {
  if (collection === null) {
    return [];
  } else if (collection === 'string') {
    return ['s', 't', 'r', 'i', 'n', 'g'];
  } else if (collection === undefined) {
    return [];
  }

  var result = [];

  for (var index = 0; index < collection.length; index++) {
    var value = transform(collection[index]);
    result.push(value);
  }

  return result;
};