const values = (object) => {
  const values = []
  if ( typeof object !== 'object' ) {
    return values
  }
  for (let key in object) {
    values.push( object[key] )
  }
  return values
}


export { values }