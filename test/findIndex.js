import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { findIndex } from '../src/findIndex'

describe( 'findIndex', () => {

  it( 'returns -1 when no values pass the truth test', () => {
  	const isPrime = (number) => {
  		let start = 2;
  		while(start <= Math.sqrt(number)) {
  			if (number % start++ < 1) return false
  		}
  		return number > 1
  	}
    const input = [4, 6, 8, 12]

    expect( findIndex(input, isPrime )).toEqual(-1)
  })


  it( 'returns the index of the first value that passes the truth test', () => {
  	const isPrime = (number) => {
  		let start = 2;
  		while(start <= Math.sqrt(number)) {
  			if (number % start++ < 1) return false
  		}
  		return number > 1
  	}
    const input = [4, 6, 7, 12]

    expect( findIndex(input, isPrime )).toEqual(2)
  })

})
