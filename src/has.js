export default ( object, key ) => {
	if( key in object ) {
		return true
	}

	return false
}

