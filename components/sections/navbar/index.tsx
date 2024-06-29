import { appleImg, bagImg, searchImg } from '@/utils'
import Image from 'next/image'
import React from 'react'
import NavItemList from './components/nav-item-list'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <Image alt='Apple' width={14} height={18} src={appleImg} />
        <NavItemList />
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Image alt='Search' width={18} height={18} src={searchImg} />
          <Image alt='Bag' width={18} height={18} src={bagImg} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
