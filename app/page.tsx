'use client'

import Hero from '@/components/sections/hero'
import Highlights from '@/components/sections/highlights'
import Model from '@/components/sections/model'
import Navbar from '@/components/sections/navbar'

export default function Home() {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}
