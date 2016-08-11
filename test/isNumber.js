import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isNumber } from '../src/isNumber'

describe( 'isNumber', () => {

  it( 'returns true when input is a number', () => {

    expect ( isNumber(1) ).toEqual(true)
  })

  it( 'returns true when input is a float', () => {

    expect ( isNumber(1.1) ).toEqual(true)
  })

  it( 'returns true when input is an integer', () => {

    expect ( isNumber(1) ).toEqual(true)
  })

  it( 'returns true when input is a number', () => {

    expect ( isNumber(1) ).toEqual(true)
  })

  it( 'returns true when input is a number', () => {

    expect ( isNumber(1) ).toEqual(true)
  })
})