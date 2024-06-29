import { useEffect, useRef } from 'react'
import useToggle from './useToggle'

function useIsMount() {
  const [isMount, toggleIsMount] = useToggle(false)
  useEffect(() => {
    toggleIsMount(true)
  }, [])
  return isMount
}

export default useIsMount
