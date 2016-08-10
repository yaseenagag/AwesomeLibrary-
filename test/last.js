import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { last } from '../src/last'

describe( 'last', () => {

    it( 'returns last value in the list', () => {
      const input = [1,2,3]

      expect( last(input, a => a )).toEqual( 3 )
    });

})