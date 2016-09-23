export default (array, n=1) => {
  if( !( array instanceof Array || typeof( array ) === 'string' ) ) {
    return []
  }

  let result = []

  for( let index = 0; index < array.length - n; index++ ) {
    result.push( array[ index ])
  }

  return result
}
