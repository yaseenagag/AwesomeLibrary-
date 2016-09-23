export default (list, predicate) => {
  const target = list || []

  for( let index = 0; index < target.length; index++ ) {
    if( ! predicate( target[ index ] ) ){
      return false
    }
  }

  return true
}

