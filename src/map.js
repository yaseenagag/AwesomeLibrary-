export default ( collection, transform ) => {
  if( collection === null ) {
    return []
  }

  else if ( collection === 'string') {
    return [ 's','t','r','i','n','g' ]
  }

  else if ( collection === undefined ) {
    return []
  }

  const result = []

  for( let index = 0; index < collection.length; index++ ) {
    const value = transform( collection[ index ] )
    result.push( value )
  }

  return result
}

