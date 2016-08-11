import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { rest } from '../src/rest'

describe( 'rest', () => {
  it( 'returns a new array from the specified index', () => {
    expect( rest( [1,2,3,4], 2 )).toEqual( [3,4] )
  })

  it( 'returns a new array from index 1 when index not specified', () => {
    expect( rest( [1,2,3,4] )).toEqual( [2,3,4] )
  })

  it( 'returns an array of characters from specified index when string input', () => {
    expect( rest( 'learner', 2 )).toEqual( [ 'a', 'r', 'n', 'e', 'r' ] )
  })
})