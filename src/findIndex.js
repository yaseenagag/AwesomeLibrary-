const findIndex = (value, list, predicate) => {

	for(let index = 0; index < list.length; index++){
		const testResult = list.findIndex( predicate(list[index]) )		
	}
}

export { findIndex }



	 //    if(testResult === false) {
		// 	return -1
		// } else if(testResult === true){
		// 	return list[index]
		// }
	// const target = list || []

	// for(let index = 0; index < list.length; index++) {
	// 	if( ! predicate( target[ index ] ) ){
	// 	  return false
	// 	}
	// }
	
	// return true