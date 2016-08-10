import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { initial } from '../src/initial'

describe( 'initial', () => {
  it( 'iterates through the array', () => {
    const input = [1,2,3,4,5]
    const n = 3
    expect( initial(input, n) ).toEqual( [1,2] )

  })

})