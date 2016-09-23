export default ( object, attribute ) => {
  if( attribute === null || attribute === undefined ) {
    return {}
  } else if( object instanceof Array ) {
    return [
      ...object.slice( 0, attribute ),
      ...object.slice( attribute + 1 )
    ]
  } else {
    for( let key in object ) {
      if( key == attribute ) {
        delete object[ key ]
      }
    }
  }

  return object
}

