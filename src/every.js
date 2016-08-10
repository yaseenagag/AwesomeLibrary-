const every = (list, predicate) => {
  let status = true
  for (let index = 0; index < list.length; index++){
    if( predicate(list[index])){
      return true
    }
    if( predicate(list[index])){
      return false
    }
  }
}

export { every }

