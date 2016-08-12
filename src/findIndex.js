const findIndex = ( list, predicate ) => {

  for( let index = 0; index < list.length; index++ ) {
    if( predicate( list[ index ] ) ) {
      return index
    }
  }

  return -1
}

export { findIndex }
