import { navLists } from '@/constants'
import React from 'react'
import NavItem from '../nav-item'

const NavItemList = () => {
  return (
    <ul className='flex'>
      {navLists.map((navItem, index) => {
        return (
          <li key={index}>
            <NavItem />
          </li>
        )
      })}
    </ul>
  )
}

export default NavItemList
