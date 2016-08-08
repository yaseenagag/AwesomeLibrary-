var assert = require('assert');
    mocha = require('mocha');
    chai = require('chai');
    expect = require('expect');


describe('#indexOf()', function() {
    it('should return the value in the array', function() {
      assert.equal(1, [1,2,3].indexOf(2));
    });
});

describe('array', function() {
  it ('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});


// describe('each()', function() {
//     it('should iterate over the array and perform a function', function() {
//       assert.equal(1, [1,2,3].indexOf(2));
//     });
// });


hello world