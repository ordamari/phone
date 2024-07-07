'use client'

import VideoCarousel from '@/components/ui/video-carousel'
import { highlightsSlides } from '@/constants'
import { rightImg, watchImg } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'

const Highlights = () => {
  const titleRef = useRef<HTMLParagraphElement>(null)
  const linkContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      delay: 2
    })

    if (!linkContainerRef.current) return
    const links: HTMLParagraphElement[] = gsap.utils.toArray(linkContainerRef.current.children)
    links.forEach((link: HTMLParagraphElement, index) => {
      gsap.to(link, {
        opacity: 1,
        y: 0,
        delay: 2.5 + index * 0.25,
        duration: 1
      })
    })
  }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 ref={titleRef} className='section-heading'>
            Get the highlights
          </h1>
          <div ref={linkContainerRef} className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              watch the film
              <Image src={watchImg} alt='Watch' width={16} height={16} className='ml-2' />
            </p>
            <p className='link'>
              watch the event
              <Image src={rightImg} alt='Watch' width={6} height={6} className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel sliders={highlightsSlides} />
      </div>
    </section>
  )
}

export default Highlights
