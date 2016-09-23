"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (object, key) {
	if (key in object) {
		return true;
	}

	return false;
};