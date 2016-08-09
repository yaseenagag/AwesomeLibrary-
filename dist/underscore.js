'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map');

Object.defineProperty(exports, 'map', {
  enumerable: true,
  get: function get() {
    return _map.map;
  }
});

var _each = require('./each');

Object.defineProperty(exports, 'each', {
  enumerable: true,
  get: function get() {
    return _each.each;
  }
});


var _ = {
  map: map,
  each: each
};

exports.default = _;

// (function(){
//   'use strict';

// //_.EACH
// const each = (array) => {
//  for (let i = 0; i < array.length; i++) {
//   const arr = [1, 2, 3];
//   const newArr = [];
//   newArr.push(array[i]);
//  }
// return newArr;
// }


// //UNDERSCORE FUNCTIONS FOR OBJECTS

// //_.MAP

//   const map = (array, fn) => {
//     for (let i=0; i<array.length; i++) {
//       const input = [1,2,3];
//       const result = [];
//       result.push(fn(input[i]));
//     };
//   }

//   //_.REDUCE


//   //_.FILTER


//   //_.MAX


//   //_.MIN

//   //_.FINDWHERE


//   //_.EVERY


//   //_.PARTITION


// //UNDERSCORE FUNCTIONS FOR ARRAYS

//   //_.FIRST

//   //_.LAST


//   //_.INITIAL


//   //_.WITHOUT


//   //_.UNION

//   //_.INTERSECTION


//   //_.RANGE


//   //_.OBJECT

// //UNDERSCORE FUNCTIONS FOR FUNCTIONS

//   //_.MEMOIZE

//   //_.BIND


//   //_.DELAY


//   //_.DEFER


//   //_.DEBOUNCE

//   //_.ONCE


//   //_.AFTER

//   //_.BEFORE

// //UNDERSCORE FUNCTIONS FOR OBJECTS

//   //_.KEYS

//   //_.VALUES


//   //_.PAIRS


//   //_.OMIT


//   //_.ISARRAY


//   //_.ISSTRING


// }());