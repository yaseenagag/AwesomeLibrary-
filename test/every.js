import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { every } from '../src/every'

describe( 'every', () => {
//everything passes true through the predicate
  it('return true if all the values pass the predicate test', () => {
    const input = [2, 4, 6, 8]

    expect( every(input, a => a % 2 == 0 )).toEqual(true)

  });

//something doesnt pass true through the predicate

  it('returns false if one of the values do not pass the predicate test', () => {
    const input = [2, 5, 6, 8]

    expect( every(input, a => a % 2 == 0 )).toEqual(false)

  });


})