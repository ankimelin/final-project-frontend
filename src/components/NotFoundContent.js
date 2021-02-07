import React from 'react'

import { MessageContainer, MessageText, ExhibitionsLink } from './StyledComponents'

export const NotFoundContent = () => {
  return (
    <MessageContainer>
      <MessageText>Something went wrong.</MessageText>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}