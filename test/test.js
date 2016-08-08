var assert = require('assert');
 	mocha = require('mocha');
 	chai = require('chai');
 	expect = require('expect');


describe('#indexOf()', function(){
	it('should return the value in the array', function(){
		assert.equal(1, [1,2,3].indexOf(2));
	});
});

describe('array', function(){
	it('should start empty', function(){
		var arr = [];
		assert.equal(arr.length, 0)
	});
});

describe('array', function() {
  it('should return the input array after iterating over and perform functions', function() {
    //implementation of map function
    var input = [1,2,3];
    var result = map(input, function(num){ /*whatever*/ });
  })
  //implementation
  expect(input).to.equal([1,2,3])
})