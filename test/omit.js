import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { omit } from '../src/omit'

describe( 'omit', () => {

  it( 'deletes the specified key in the input object', () => {
    const input = {first: 'shaka', last: 'lee'}

    expect( omit(input, 'first')).toEqual({last:'lee'})
  })

  it( 'deletes the specified index in the input array', () => {
    const input = [ 1, 2, 3 ]
    expect( omit( input, 0 )).toEqual( [2, 3] )
  })

  it( 'returns an empty object for undefined input', () => {
    expect( omit( undefined )).toEqual( {} )
  })

  it( 'returns an empty object for null input', () => {
    expect( omit( null )).toEqual( {} )
  })
})