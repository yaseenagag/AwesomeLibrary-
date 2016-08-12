import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { reject } from '../src/reject'

describe( 'reject', () => {

  it('returns items that do not pass the predicate test', () => {
    const input = [ 1, 2, 3, 4 ]

    expect( reject(input, a => a % 2 == 0 )).toEqual([ 1, 3 ])

  });

  it('returns empty array when no items pass the predicate test', () => {
    const input = [ 2, 4, 6 ]

    expect( reject(input, a => a % 2 == 0 )).toEqual([])

  });

})