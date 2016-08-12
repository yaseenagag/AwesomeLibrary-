import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { reject } from '../src/reject'

describe( 'reject', () => {

  it('iterates through a list and performs truth test', () => {
    const input = [ 1, 2, 3, 4 ]

    expect( reject(input, a => a % 2 == 0 )).toEqual([ 2, 4 ])

  });
// What happens when the input is false
    it('iterates through a list and performs truth test', () => {
    const input = [ 1, 3, 5 ]

    expect( reject(input, a => a % 2 == 0 )).toEqual([])

  });

})