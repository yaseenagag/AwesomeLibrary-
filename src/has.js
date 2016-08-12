const has = ( object, key ) => {
	if( key in object ) {
		return true
	}

	return false
}


export { has }