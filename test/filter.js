import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { filter } from '../src/filter'

describe( 'filter', () => {

  it('iterates through a list and performs truth test', () => {
    const input = [ 1, 2, 3, 4 ]

    expect( filter(input, a => a % 2 == 0 )).toEqual([ 2, 4 ])

  });
// What happens when the input is false
    it('iterates through a list and performs truth test', () => {
    const input = [ 1, 3, 5 ]

    expect( filter(input, a => a % 2 == 0 )).toEqual([])

  });

})

// import mocha from 'mocha'
// import chai from 'chai'
// import expect from 'expect'

// import { first } from '../src/first'

// describe( 'first', () => {

//     it( 'returns first value in the list', () => {
//       const input = [1,2,3]

//       expect( first(input, a => a )).toEqual( 1 )
//     });

// })