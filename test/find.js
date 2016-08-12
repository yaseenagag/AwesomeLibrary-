import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { find } from '../src/find'

describe( 'find', () => {
  it( 'returns the first value that passes the predicate', () => {
    const input = [1, 3, 6, 8]

    expect( find(input, a => a % 2 == 0 )).toEqual(6)
  })

  it('returns undefined when none of the values in the array pas the predicate ', () => {
    const input = [1, 5, 7, 9]

    expect( find(input, a => a % 2 == 0 )).toEqual(undefined)
  })

  it( 'returns null when you pass null', () => {
    expect( find( [null], a => a%2 == 0 )).toEqual( null )

  })

  it( 'returns undefined when you pass an empty array', () => {
    expect( find( [], a => a%2 == 0 )).toEqual( undefined )
  })
})