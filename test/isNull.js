import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isNull } from '../src/isNull'

describe( 'isNull', () => {

    it( 'returns true when the input is null', () => {

      expect( isNull(null) ).toEqual( true )
    })

    it( 'returns false if input is a string', () => {

      expect( isNull( 'Shaka') ).toEqual(false)
    })

    it( 'returns false if input is a number', () => {
      expect( isNull( 1 ) ).toEqual(false)
    })

    it( 'returns false if input is undefined', () => {
      expect( isNull( undefined ) ).toEqual(false)
    })

    it( 'returns false if input is an object', () => {
      expect( isNull( {name: 'Shaka'}) ).toEqual(false)
    })

})