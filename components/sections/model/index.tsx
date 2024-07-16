import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ModelsController from '@/components/ui/models-controller'

function Model() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.to(headingRef.current, {
      y: 0,
      opacity: 1
    })
  }, [])

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 ref={headingRef} className='section-heading'>
          Take a closer look
        </h1>
        <div className='flex  flex-col items-center mt-5'>
          <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
            <ModelsController />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
