export default ( collection, iteratee ) => {
  const fn = iteratee || ( () => {} )

  for( let key in collection ) {
    fn( collection[ key ], key, collection )
  }

  return collection
}


// AND
// X Y A
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1

// OR
// X Y A
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1

// NOT
// X A
// 0 1
// 1 0