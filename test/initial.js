import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { initial } from '../src/initial'

describe( 'initial', () => {
  it( 'returns the first length - n elements in a new array', () => {
    expect( initial([1,2,3,4,5], 3) ).toEqual( [1,2] )
  })

  it( 'returns everything but last element when n not provided', () => {
    expect( initial( [1,2,3,4,5] )).toEqual( [1,2,3,4] )
  })

  it( 'returns an empty array when n > size of array', () => {
    expect( initial( [1,2,3,4,5], 100 )).toEqual( [] )
  })

  it( 'returns an empy array when input is an object', () => {
    expect( initial( {a: 1, b: 2 }) ).toEqual( [] )
  })

  it( 'returns an array of the initial characters when string input provided', () => {
    expect( initial( 'shaka', 2 )).toEqual( [ 's', 'h', 'a' ] )
  })
})