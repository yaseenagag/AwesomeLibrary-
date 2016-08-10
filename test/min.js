import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { min } from '../src/min'

describe( 'min', () => {

    it( 'returns minimum value in the list', () => {
      const input = [1,2,3]

      expect( min(input, a => a )).toEqual( 1 )
    });

})