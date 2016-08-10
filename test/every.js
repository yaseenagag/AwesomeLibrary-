import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { every } from '../src/every'

describe( 'every', () => {
  it( 'return true if all the values pass the predicate test', () => {
    const input = [2, 4, 6, 8]

    expect( every(input, a => a % 2 == 0 )).toEqual(true)
  })

  it('returns false if one of the values do not pass the predicate test', () => {
    const input = [2, 5, 6, 8]

    expect( every(input, a => a % 2 == 0 )).toEqual(false)
  })

  it( 'returns true for non array type', () => {
    expect( every( 1, a => a )).toBe( true )
  })

  it( 'returns true for null', () => {
    expect( every( null, a => a )).toBe( true )
  })

  it( 'returns true for undefined', () => {
    expect( every( undefined, a => a )).toBe( true )
  })
})