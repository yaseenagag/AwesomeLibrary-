"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var has = function has(object, key) {
	if (key in object) {
		return true;
	}

	return false;
};

exports.has = has;