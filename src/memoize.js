const memoize = fn => {
  const table = {}

  return () => {
    console.log( '---', arguments )

    // fn( ...arguments )
  }
}

export { memoize }