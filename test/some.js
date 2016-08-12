import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { some } from '../src/some'

describe( 'some', () => {

	it( 'returns true if any of the values in the list pass the predicate test', () => {

		expect([null, 0, 'yes', false]);
	})

})