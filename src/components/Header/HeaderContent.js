import React from 'react'

import { MenuContainer, MenuLink, TitleContainer, TitleText } from './HeaderStyled'

export const HeaderContent = () => {
  return (
    <>
      <MenuContainer>
        <MenuLink strict activeClassName='active' to='/exhibitions'>Exhibitions</MenuLink>
        <MenuLink exact activeClassName='active' to='/about-us'>About us</MenuLink>
      </MenuContainer>
      <TitleContainer>
        <TitleText>CURATED</TitleText>
      </TitleContainer>
    </>
  )
}