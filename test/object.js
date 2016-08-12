import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { object } from '../src/object'

//it should not return anything
describe( 'object', () => {

    it( 'converts arrays into objects by returning the first array as a key', () => {
      const input = ['moe', 'larry', 'curly'] 
      const props = [3,6,9]

      expect( object(input, props ) ).toEqual({ moe: 3, larry: 6, curly:9 })
    });

    it( 'returns an empty object when the first parameter is empty', () => {
      const input = []
      const props = [3,6,9]

      expect( object(input, props ) ).toEqual({})
    });

    it( 'combines two arrays and leaves the value unde', () => {
      const input = ['a','b','c','d']
      const props = [3,6,9]

      expect( object(input, props) ).toEqual({ a:3, b:6, c:9, d:undefined})
    });



    })