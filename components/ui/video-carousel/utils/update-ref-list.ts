import { MutableRefObject } from 'react'

function updateRefList<T extends HTMLElement>(refList: MutableRefObject<T[]>) {
  return (index: number, el: T | null) => {
    if (el) {
      refList.current[index] = el
    }
  }
}

export default updateRefList
