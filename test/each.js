import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { each } from '../src/each'

const identity = element => element
//it should not return anything
describe( 'each', () => {
    it( 'returns an empty array', () => {
    const input = [1,2,3]
      expect( each(input, a => a + 1 )).toEqual([1,2,3])
    });

    // it('loops through the collection and transforms the collection', () => {

    //   expect( input ).toEqual([ 1, 2, 3 ])
    // });

    // it('loops through the collection and transforms the collection', () => {

    //   expect( input ).toEqual([ 1, 2, 3 ])
    // });


//iterate through an object

//check if input is an object

//check if input is an array

//

})
