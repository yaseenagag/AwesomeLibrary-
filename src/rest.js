const rest = ( array, index=1 ) => {
  if( typeof( array ) === 'string' ) {
    return array.slice( index ).split('')
  }

  return array.slice( index )
}

export { rest }