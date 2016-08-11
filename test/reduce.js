import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { reduce } from '../src/reduce'

describe( 'reduce', () => {
  it( 'boils down a list of values into a single value, starting with memo', () => {
    expect( reduce( [1,2,3], (memo, value) => memo + value, 0 ) ).toEqual( 6 )
  })

  it( 'boils down a list of values into a single value, starting with first element if no memo', () => {
    expect( reduce( [1,2,3], (memo, value) => memo + value )).toEqual( 6 )
  })

  it( 'invokes iteratee with memo, value, index, list if array', () => {
    const test = (memo, value, index, list) => {
      console.log( memo, value, index, list )
      return memo + `${memo}-${value}-${index}-${list[index]}`
    }

    // 1st pass:
    // memo: ''
    // value: 1
    // index: 0
    // list[0]: 1
    // return '-1-0-1'

    // 2nd pass:
    // memo: '-1-0-1'
    // value: 2
    // index: 1
    // list[1]: 2
    // return '-1-0-1-1-0-1-2-1-2'

    expect( reduce( [1,2], test )).toEqual( '-1-0-1-1-0-1-2-1-2' )
  })

  it( 'invokes iteratee with memo, value, key, object if object', () => {
    const test = (memo, value, key, object) => {
      console.log( memo, value, key, object )
      return memo + `${memo}-${value}-${key}-${object[key]}`
    }

    expect( reduce( {a: 1, b: 2 }, test, '' )).toEqual( '-1-a-1-1-a-1-2-b-2' )
  })

  it( 'returns the memo if null input', () => {
    expect( reduce( null, a => a, 'A')).toEqual( 'A' )
  })

  it( 'returns the memo if undefined input', () => {
    expect( reduce( undefined, a => a, 'A')).toEqual( 'A' )
  })
})
