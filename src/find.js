export default ( list, predicate ) => {
  const fn = predicate || ( a => a )

  for( let index = 0; index < list.length; index++ ) {
    if( predicate( list[ index ] ) ) {
      return list[ index ]
    }
  }

  return undefined
}
