import React from 'react'

import { MenuContainer, MenuLink } from '../styling/StyledMenu'

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuLink strict activeClassName='active' to='/exhibitions'>Exhibitions</MenuLink>
      <MenuLink exact activeClassName='active' to='/about-us'>About us</MenuLink>
    </MenuContainer>
  )
}