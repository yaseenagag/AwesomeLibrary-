"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var object = function object(array, list) {
	var newObj = {};
	for (var index = 0; index < array.length; index++) {
		newObj[array[index]] = list[index];
	}return newObj;
};

exports.object = object;