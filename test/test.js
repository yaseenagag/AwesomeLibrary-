var assert = require('assert');
    mocha = require('mocha');
    chai = require('chai');
    request = require('request');
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


// describe('Google.com', function() {
//   it('should have a HTTP of 200 - file not found', function(done) {
//        done();
//     request('https://google.com/', function(err, res, body){
//         console.log(err, res, body);
//         expect(res.statusCode).to.equal(200)
//     });
//   });
// });

// describe('each()', function() {
//     it('should iterate over the array and perform a function', function() {
//       assert.equal(1, [1,2,3].indexOf(2));
//     });
// });


hello