import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { findIndex } from '../src/findIndex'

describe( 'findIndex', () => {

  it( 'returns -1 when no values pass the truth test', () => {
<<<<<<< HEAD
  	const isPrime = (number) => {
  		let start = 2;
  		while(start <= Math.sqrt(number)) {
  			if (number % start++ < 1) return false
  		}
  		return number > 1
  	}
=======
    const isPrime = (number) => {
      let start = 2;
      while(start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false
      }
      return number > 1
    }
>>>>>>> 7dde6be2ddf1bc1584b19b411f408b35d4e0edef
    const input = [4, 6, 8, 12]

    expect( findIndex(input, isPrime )).toEqual(-1)
  })

<<<<<<< HEAD

  it( 'returns the index of the first value that passes the truth test', () => {
  	const isPrime = (number) => {
  		let start = 2;
  		while(start <= Math.sqrt(number)) {
  			if (number % start++ < 1) return false
  		}
  		return number > 1
  	}
=======
    it( 'returns -1 when no values pass the truth test', () => {
    const isPrime = (number) => {
      let start = 2;
      while(start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false
      }
      return number > 1
    }
>>>>>>> 7dde6be2ddf1bc1584b19b411f408b35d4e0edef
    const input = [4, 6, 7, 12]

    expect( findIndex(input, isPrime )).toEqual(2)
  })

<<<<<<< HEAD
=======

>>>>>>> 7dde6be2ddf1bc1584b19b411f408b35d4e0edef
})
