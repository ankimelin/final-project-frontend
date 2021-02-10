import React from 'react'
import { useSelector } from 'react-redux'

import { MenuContainer, MenuLink, TitleContainer, TitleText }
  from '../../styling/StyledHeader'

export const HeaderContent = () => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <>
      <MenuContainer >
        <MenuLink strict activeClassName='active' to='/exhibitions'>Exhibitions</MenuLink>
        <MenuLink exact activeClassName='active' to='/about-us'>About us</MenuLink>
      </MenuContainer>
      <TitleContainer >
        <TitleText className={admin ? 'admin' : null}>CURATED</TitleText>
      </TitleContainer>
    </>
  )
}