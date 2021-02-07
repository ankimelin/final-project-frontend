import React from 'react'

import { Container, Text, ExhibitionsLink } from './NotFoundStyled'

export const NotFoundContent = () => {

  return (
    <Container>
      <Text>Something went wrong.</Text>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </Container>
  )
}