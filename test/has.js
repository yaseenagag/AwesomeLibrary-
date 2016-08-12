import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { has } from '../src/has'

describe( 'has', () => {

it( 'returns true if the key mentioned in the second exists in the object', () => {
const input = {a:1, b:2, c:3}

expect( has(input, 'b')).toEqual( true )
});

it( 'returns false if the key mentioned in the second param does not exist in the object', () => {
const input = {a:1, b:2, c:3}

expect( has(input, 'd')).toEqual( false )
});

it( 'returns false if no key is mentioned in the second param', () => {
const input = {a:1, b:2, c:3}

expect( has(input, '')).toEqual( false )
});

})