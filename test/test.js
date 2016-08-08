// var assert = require('assert');


// describe('Array', function() {
// 	describe('#indexOf()', function() {
// 		it('should return -1 when the value is not present', function() {
// 			assert.equal(-1, [1,2,3].indexOf(4));
// 		});

// 	});

// });

// describe('Array', function() {
// 	describe('indexOf()', function(){
// 		it('description of the test', function(){
// 			assert.equal(0, [1,2,3,4,5].indexOf(1))
// 		});
// 	});
// });

// describe('#each()', function(){
// 	it('should iterate over the array and perform a function', function(){

// 	})
// })

var assert = require('assert');
 	chai = require('chai'); 

describe('Array', function(){
	it('should start empty', function(){
		var arr = [];

		assert.equal(arr.length, 0)
	})
})