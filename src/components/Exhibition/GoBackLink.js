import React from 'react'

import { LinkContainer, LinkImage } from './StyledExhibition'

export const GoBackLink = () => {
  return (
    <LinkContainer to='/exhibitions'>
      <LinkImage
        src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
        alt='go back'>
      </LinkImage>
    </LinkContainer>
  )
}