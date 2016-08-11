import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isBoolean } from '../src/isBoolean'

describe( 'isBoolean', () => {

    it( 'returns true when the input is true', () => {

      expect( isBoolean(true) ).toEqual( true )
    })

    it( 'returns true if input is false', () => {

      expect( isBoolean(false) ).toEqual( true )
    })

    it( 'returns false if input is null', () => {
      expect( isBoolean(null) ).toEqual(false)
    })

    it( 'returns false if input is undefined', () => {
      expect( isBoolean( undefined ) ).toEqual(false)
    })

    it( 'returns false if input is a number', () => {
      expect( isBoolean(1) ).toEqual(false)
    })

    it( 'returns false if input is an array', () => {
      expect( isBoolean( [1,2,3] ) ).toEqual(false)
    })

    it( 'returns false if input is an object', () => {
      expect( isBoolean( {name: 'Shaka'} ) ).toEqual(false)
    })

})