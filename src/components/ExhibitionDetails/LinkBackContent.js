import React from 'react'

import { BackContainer, BackIcon } from './LinkBackStyled'

export const LinkBackContent = () => {

  return (
    <BackContainer to='/exhibitions'>
      <BackIcon
        src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
        alt='go back'>
      </BackIcon>
    </BackContainer>
  )
}