const reduce = (input, iteratee, memo) => {
  if( ! input ) {
    return memo
  }

  let result = memo

  for( let key in input ) {
    if( result || result === '' ) {
      result = iteratee( result, input[ key ], key, input )
    } else {
      result = input[ key ]
    }
  }

  return result
}

export { reduce }