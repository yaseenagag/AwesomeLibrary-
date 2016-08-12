import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { memoize } from '../src/memoize'

const fibbonaci = n =>
  n < 2 ? n : fibbonaci( n - 1 ) + fibbonaci( n - 2 )

describe( 'memoize', () => {
  it( 'returns the result of the function', () => {
    const memoFib = memoize( fibbonaci )

    expect( memoFib( 2 ) ).toEqual( 1 )
  })

  it( 'only invokes function once for each initial parameter', () => {
    const doer = () => {
      let counter = {}

      return {
        counter,
        fn: n => {
          counter[ n ] = counter[ n ] === undefined ? 1 : counter[ n ] + 1
          return fibbonaci( n )
        }
      }
    }

    const test = doer()
    const memoFib = memoize( test.fn )

    memoFib( 2 )
    memoFib( 2 )
    memoFib( 3 )

    expect( test.counter[ 2 ] ).toBe( 1 )
  })
})