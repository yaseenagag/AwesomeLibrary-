import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { max } from '../src/max'

describe( 'max', () => {

    it( 'returns maximum value in the list', () => {
      const input = [1,2,3]

      expect( max(input, a => a )).toEqual( 3 )
    });

})