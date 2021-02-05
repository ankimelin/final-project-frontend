import React from 'react'

import { MenuContainer, MenuLink } from './HeaderStyled'

export const MenuContent = () => {

  return (
    <MenuContainer>
      <MenuLink strict activeClassName='active' to='/exhibitions'>Exhibitions</MenuLink>
      <MenuLink exact activeClassName='active' to='/about-us'>About us</MenuLink>
    </MenuContainer>
  )
}