import React from 'react'

import { MessageContainer, MessageText, ExhibitionsLink } from '../StyledComponents'

export const NotFoundAdmin = () => {
  return (
    <MessageContainer>
      <MessageText>Something went wrong.</MessageText>
      <ExhibitionsLink to='/admin'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}