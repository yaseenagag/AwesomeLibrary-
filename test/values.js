import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { values } from '../src/values'

describe( 'values', () => {
  it( "returns all the values of an object's properties", () => {
    expect( values({ first: 'shaka', last: 'lee' }) ).toEqual([ 'shaka', 'lee' ])
  })

  it( "returns an empty array for an object with no values", () => {
    expect( values( {} )).toEqual( [] )
  })

  it( "returns an empty array for null input", () => {
    expect( values( null )).toEqual( [] )
  })

  it( "returns an empty array for undefined input", () => {
    expect( values( undefined )).toEqual( [] )
  })

  it( "returns the values in an array", () => {
    expect( values( [10,11,12] )).toEqual( [10,11,12] )
  })
})