import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { first } from '../src/first'

describe( 'first', () => {

    it( 'returns first value in the list', () => {
      const input = [1,2,3]

      expect( first(input, a => a )).toEqual( 1 )
    });

})