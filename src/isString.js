const isString = (input) => {
  if ( typeof input == null ) {
    return false
  }
  else if( typeof input == 'undefined' ) {
    return false
  } else if ( !(input instanceof Array || typeof input === 'string') ) {
    return false
  } else if ( (input instanceof Array )){
    return false
  } else {
    return true
  }
}

export { isString }