import React from 'react'

import { Container, Text, ExhibitionsLink } from '../NotFound/NotFoundStyled'

export const AdminNotFound = () => {
  return (
    <Container>
      <Text>Something went wrong.</Text>
      <ExhibitionsLink to='/admin'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </Container>
  )
}