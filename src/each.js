const each = ( collection, transform ) => {
const result = []
let value = []
  for( let index = 0; index < collection.length; index++ ) {
    const transform = () => {}
      value = transform( collection[ index ] )
      result.push(value)
  }
  return result
}

export { each }