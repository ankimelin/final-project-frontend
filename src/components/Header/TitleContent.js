import React from 'react'
import { useSelector } from 'react-redux'

import { TitleContainer, TitleText } from './HeaderStyled'

export const TitleContent = () => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <TitleContainer>
      <TitleText className={admin ? 'admin' : null}>CURATED</TitleText>
    </TitleContainer>
  )
}