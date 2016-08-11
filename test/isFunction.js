import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isFunction } from '../src/isFunction'

describe( 'isFunction', () => {

  it( 'returns true if input is a function', () => {
    expect( isFunction( a => a + 2 ) ).toEqual(true)
  })

  it( 'returns false if input is an array', () => {
    expect( isFunction( [1,2,3] ) ).toEqual(false)
  })

  it( 'returns false if input is null', () => {
    expect( isFunction( null ) ).toEqual(false)
  })

  it( 'returns false if input is undefined', () => {
    expect( isFunction( undefined ) ).toEqual(false)
  })

  it( 'returns false if input is an object', () => {
    expect( isFunction( {name: 'Shaka'}) ).toEqual(false)
  })
})