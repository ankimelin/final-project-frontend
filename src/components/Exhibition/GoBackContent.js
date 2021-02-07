import React from 'react'

import { BackContainer, BackIcon } from './GoBackStyled'

export const GoBackContent = () => {
  return (
    <BackContainer to='/exhibitions'>
      <BackIcon
        src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
        alt='go back'>
      </BackIcon>
    </BackContainer>
  )
}