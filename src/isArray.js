const isArray = ( input ) => {
  if ( typeof input == 'undefined' ) return false
  if ( (input instanceof Object ) ) return false
  if ( typeof input === 'string' || input instanceof String ) return false
  if ( (input instanceof Array ) ) return true
  return false
}

export { isArray }