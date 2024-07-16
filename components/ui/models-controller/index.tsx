import React, { useRef, useState } from 'react'
import Size from './types/size.type'
import { yellowImg } from '@/utils'
import * as THREE from 'three'
import ModelData from './types/model-data.type'
import ModelView from './components/model-view'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'

function ModelsController() {
  const [size, setSize] = useState<Size>('small')
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)
  const [model, setModel] = useState<ModelData>({
    title: 'iPhone 15 pro in natural titanium',
    colors: ['#8f8a81', '#ffe7b9', '#6f6c64'],
    img: yellowImg
  })

  const cameraControlSmallRef = useRef<HTMLDivElement>(null)
  const cameraControlLargeRef = useRef<HTMLDivElement>(null)

  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())

  return (
    <>
      <ModelView
        controlRef={cameraControlSmallRef}
        groupRef={small}
        gsapType='view1'
        index={0}
        item={model}
        setRotation={setSmallRotation}
        size={size}
      />
      <ModelView
        controlRef={cameraControlLargeRef}
        groupRef={large}
        gsapType='view2'
        index={1}
        item={model}
        setRotation={setLargeRotation}
        size={size}
      />
      <Canvas
        className='w-full h-full'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: 'hidden'
        }}
        eventSource={document.getElementById('root') as HTMLElement}
      >
        <View.Port />
      </Canvas>
      <div className='mx-auto w-full'>
        <p className='text-sm font-light text-center mb-5'>{model.title}</p>
        <div className='flex-center'>
          <ul className='colors-container'>
            {model.colors.map((color, index) => (
              <li key={index} className='color' style={{ backgroundColor: color }}></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ModelsController
