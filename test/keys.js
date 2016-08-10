import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { keys } from '../src/keys'

describe( 'keys', () => {
  it( "returns all the names of an object's properties", () => {
    expect( keys({ first: 'shaka', last: 'lee' }) ).toEqual([ 'first', 'last' ])
  })

  it( "returns an empty array for an object with no keys", () => {
    expect( keys( {} )).toEqual( [] )
  })

  it( "returns an empty array for null input", () => {
    expect( keys( null )).toEqual( [] )
  })

  it( "returns an empty array for undefined input", () => {
    expect( keys( undefined )).toEqual( [] )
  })
})
