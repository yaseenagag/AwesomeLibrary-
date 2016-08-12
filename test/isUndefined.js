import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isUndefined } from '../src/isUndefined'

describe( 'isUndefined', () => {

  it ( 'returns true if the input is undefined', () => {

    expect( isUndefined(undefined) ).toEqual(true)
  })

  it ( 'returns false if the input is null', () => {

    expect( isUndefined(null) ).toEqual(false)
  })

  it ( 'returns false if the input is a string', () => {

    expect( isUndefined('string') ).toEqual(false)
  })

  it ( 'returns false if the input is an object', () => {

    expect( isUndefined({}) ).toEqual(false)
  })

  it ( 'returns false if the input is number', () => {

    expect( isUndefined(1) ).toEqual(false)
  })

})