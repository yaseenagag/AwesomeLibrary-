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


//   it( 'returns -1 when the value is not present', () => {

//     expect( findIndex([4,6,8,12], fn(number){
//     		let start = 2
//     		while (start <= Math.sqrt(number)) {
//     			if (number % start++ < 1) return false
//     		}
//     	return number > 1
//     	})

//   } ).toEqual(-1)
})
