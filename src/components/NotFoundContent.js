import React from 'react'

import { NotFoundContainer, NotFoundText, ExhibitionsLink } from '../styling/StyledNotFoundContent'

export const NotFoundContent = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>Something went wrong.</NotFoundText>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </NotFoundContainer>
  )
}