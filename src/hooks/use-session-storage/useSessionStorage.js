import { useState, useEffect } from 'react'

export function useSessionStorage(key, val) {
  const [ value, setValue ] = useState(val || window.sessionStorage.getItem(key));

  useEffect(() => {
    window.sessionStorage.setItem(key, value)
  }, [ value, key ])

  return [ value, setValue ]
}
