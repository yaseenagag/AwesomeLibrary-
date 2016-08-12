import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { findIndex } from '../src/findIndex'

describe( 'findIndex', () => {
  it( 'return true if all the values pass the predicate test', () => {
    const input = [2, 4, 6, 8]

    expect( findIndex(input, a => a % 2 == 0 )).toEqual(true)
  })
})