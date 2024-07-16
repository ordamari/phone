import * as THREE from 'three'
import React from 'react'
import ModelData from '../../types/model-data.type'
import Size from '../../types/size.type'

type ModelViewProps = {
  index: number
  groupRef: React.RefObject<THREE.Group>
  gsapType: string
  controlRef: React.RefObject<HTMLDivElement>
  setRotation: React.Dispatch<React.SetStateAction<number>>
  item: ModelData
  size: Size
}

function ModelView({ index, groupRef, gsapType, controlRef, setRotation, item }: ModelViewProps) {
  return <div>ModelView</div>
}

export default ModelView
