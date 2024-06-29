import { navLists } from '@/constants'
import React from 'react'
import NavItem from '../nav-item'

const NavItemList = () => {
  return (
    <ul className='flex flex-1 justify-center max-sm:hidden'>
      {navLists.map((navItem, index) => {
        return (
          <li key={index}>
            <NavItem>{navItem}</NavItem>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItemList
