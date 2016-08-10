import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { keys } from '../src/keys'

describe( 'keys', () => {

  it('returns all the names of an object properties', () => {
    const object = { first: 'shaka', last: 'lee' }

    expect( keys(object) ).toEqual([ 'first', 'last' ])

  })

})




//   it('returns false if one of the values do not pass the predicate test', () => {
//     const input = [2, 5, 6, 8]

//     expect( every(input, a => a % 2 == 0 )).toEqual(false)

//   });


// })