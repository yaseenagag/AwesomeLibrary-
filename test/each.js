import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { each } from '../src/each'

const identity = element => element


describe( 'each', () => {
  // What happens when input is an object?
  // What happens when the input is null?
  // What happens when the input is a string?
  // What happens when the input is undefined

  // iteratee/transform can accept value and index
  // iteratee/transform can accept value and index and collection

  it( 'creates a new array by transforming the input array', () => {
    const input = [ 1, 2, 3 ]
    const result = map( input, a => a * 2 )

    expect( result ).toEqual( [ 2, 4, 6 ] )
  })
})
