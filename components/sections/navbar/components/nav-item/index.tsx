import React, { PropsWithChildren } from 'react'

type NavItemProps = PropsWithChildren

const NavItem = ({ children }: NavItemProps) => {
  return <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-colors'>{children}</div>
}

export default NavItem
