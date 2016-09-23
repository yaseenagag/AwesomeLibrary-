export default ( array, index=1 ) => {
  if( typeof( array ) === 'string' ) {
    return array.slice( index ).split('')
  }

  return array.slice( index )
}

