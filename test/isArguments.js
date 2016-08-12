import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isArguments } from '../src/isArguments'

describe( 'isArguments', () => {

    it ( 'returns true if the input is an argument', () => {

    expect( isArguments(a => a) ).toEqual(true)
  })

  it ( 'returns false if the input is an array', () => {

    expect( isArguments([1,2,3,4]) ).toEqual(false)
  })

  it ( 'returns false if the input is a string', () => {

    expect( isArguments('string') ).toEqual(false)
  })

  it ( 'returns false if the input is an object', () => {

    expect( isArguments({}) ).toEqual(false)
  })

  it ( 'returns false if the input is number', () => {

    expect( isArguments(1) ).toEqual(false)
  })

})