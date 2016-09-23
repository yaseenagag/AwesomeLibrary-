export default (fn, hashFunction) => {
  const table = {}
  const hash = hashFunction || ( array => array[ 0 ] )

  return ( ...inputs ) => {
    const key = hash( inputs )

    if( table[ key ] === undefined ) {
      table[ key ] = fn( ...inputs )
    }

    return table[ key ]
  }
}

