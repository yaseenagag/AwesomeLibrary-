import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { each } from '../src/each'

const identity = element => element
//it should not return anything
describe( 'each', () => {

    it( 'returns initial collection', () => {
      const input = [1,2,3]

      expect( each(input, a => a + 1 )).toEqual( input )
    });

    it( 'returns initial object', () => {
      const input = { a: 1, b: 2 }

      expect( each(input, a => a + 1 )).toEqual( input )
    });


    it( 'invokes the iteratee with element, index, and list for each element in the array', () => {
      const doer = () => {
        let result = []

        return {
          result,
          fn: ( element, index, list ) => {
            result.push( element + '-' + index + '-' + list[index] )
          }
        }
      }

      const testObj = doer()

      each( ['a','b','c'], testObj.fn )
      expect( testObj.result ).toEqual( [ 'a-0-a', 'b-1-b', 'c-2-c'] )

    })

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
