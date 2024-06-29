'use client'

import React, { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@/utils/index'
import useMediaQuery from '@/hooks/useMediaQuery'
import useIsMount from '@/hooks/useIsMount'

const Hero = () => {
  const matches = useMediaQuery('(max-width: 760px)')
  const titleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isMount = useIsMount()
  const videoSrc = useMemo(() => (matches ? smallHeroVideo : heroVideo), [matches])

  useGSAP(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      delay: 2
    })

    gsap.to(ctaRef.current, {
      opacity: 1,
      y: -50,
      delay: 2
    })
  }, [])

  return (
    <section className='w-full nav-height relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p ref={titleRef} className='hero-title'>
          iPhone 15 pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          {isMount && (
            <video autoPlay muted playsInline key={videoSrc} className='pointer-events-none'>
              <source src={videoSrc} type='video/mp4' />
            </video>
          )}
        </div>
      </div>
      <div ref={ctaRef} className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
