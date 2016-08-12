import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { size } from '../src/size'

describe( 'size', () => {

  it( 'returns the length of the array when the input is an array', () => {
    expect( size( [1,2,3] )).toEqual(3)
  })

  it( 'returns the length of the object when the input is an object', () => {
    expect( size( {a: 1, b: 2, c: 3} )).toEqual(3)
  })

  it( 'returns 0 when the input is an empty object', () => {
    expect( size( {} )).toEqual(0)
  })

  it( 'returns 0 when the input is null', () => {
    expect( size( null )).toEqual(0)
  })

  it( 'returns 0 when the input is undefined', () => {
    expect( size( undefined )).toEqual(0)
  })

})