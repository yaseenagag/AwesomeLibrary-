const filter = ( list, predicate ) => {
  const result = []
  for( let index = 0; index < list.length; index++ ){
    if( predicate(list[index])){
      result.push(list[index])
    }
  }
return result
}

export { filter }