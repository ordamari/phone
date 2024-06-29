import { useCallback, useState } from 'react'

function useToggle(initialValue: boolean = false): [boolean, (value?: unknown) => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback((newValue?: unknown) => {
    setValue(prevValue => {
      if (typeof newValue === 'boolean') {
        return newValue
      }
      return !prevValue
    })
  }, [])

  return [value, toggle]
}

export default useToggle
