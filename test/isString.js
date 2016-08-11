import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isString } from '../src/isString'

describe( 'isString', () => {

  it( 'returns true if input is a string', () => {
    expect( isString( 'love' ) ).toEqual(true)
  })

  it( 'returns false if input is an array', () => {
    expect( isString( [1,2,3] ) ).toEqual(false)
  })

  it( 'returns false if input is null', () => {
    expect( isString( null ) ).toEqual(false)
  })

  it( 'returns false if input is undefined', () => {
    expect( isString( undefined ) ).toEqual(false)
  })

  it( 'returns false if input is an object', () => {
    expect( isString( {name: 'Shaka'}) ).toEqual(false)
  })
})