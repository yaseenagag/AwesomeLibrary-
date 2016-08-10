import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'
import should from 'should'

chai.should()


import { map } from '../src/map'

const identity = element => element

describe('map2', () => {
  //what happens when input is an object?
  const result = { name: 'shaka' }
  if ( result instanceof Object == true) {
    it ('checks if the input is an object', () => {
        delete result.name;
      expect( result ).toEqual( {} )
    })
  }

  it( 'creates a new array by transforming the input array', () => {
    const input = [ 1, 2, 3 ]
    const result = map( input, a => a * 2 )

    expect( result ).toEqual( [ 2, 4, 6 ] )
  })

  // What happens when the input is null?
  it( 'returns an empty array when the input is null', () => {
    expect( map( null, identity )).toEqual( [] )
  })

  // What happens when the input is a string?
  it( 'returns an array of transformed characters when the input is a string', () => {
    expect( map( "test string", a => a + 2 )).toEqual(
      [ 't2', 'e2', 's2', 't2', ' 2', 's2', 't2', 'r2', 'i2', 'n2', 'g2' ]
    )
  })

  // What happens when the input is undefined
  it( 'returns an empty array when the input is undefined', () => {
    expect( map( undefined, identity)).toEqual( [] )
  })

  // iteratee/transform can accept value and index
  it( 'returns an array with the value when the input is at that index', () => {
    const input = [ 1, 2, 3 ]
    expect( map( input, a => input[1] ) )
  })

  // iteratee/transform can accept value and index and collection


})








