"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (array, list) {
	var newObj = {};
	for (var index = 0; index < array.length; index++) {
		newObj[array[index]] = list[index];
	}return newObj;
};