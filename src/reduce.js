const reduce = ( collection, transform ) => {
  const result = []

  for( let index = 0; index < collection.length; index++ ) {
    const value = transform( collection[ index ] )
    result.push( value )
  }

  return result
}

export { reduce }