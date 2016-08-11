const isFunction = ( fn ) => {
  if ( typeof fn == 'undefined' ) return false
  if ( (fn instanceof Array ) ) return false
  if ( (fn instanceof Object ) ) return false
  if ( typeof fn === 'string' || fn instanceof String ) return false
  if ( typeof fn == ( () => {} ) ) return true
  return false
}

export { isFunction }


