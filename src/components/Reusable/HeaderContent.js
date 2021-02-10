import React from 'react'
import { useSelector } from 'react-redux'

import { MenuContainer, TitleContainer } from '../../styling/StyledContainer'
import { MenuLink } from '../../styling/StyledLink'
import { TitleText } from '../../styling/StyledText'

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