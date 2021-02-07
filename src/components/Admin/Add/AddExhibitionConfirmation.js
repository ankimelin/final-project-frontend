import React from 'react'

import { Text, ExhibitionsLink } from '../../NotFound/NotFoundStyled'
import { Container } from '../../NotFound/NotFoundStyled'

export const AddExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <Container>
      <Text>{exhibition.title} added!</Text>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </Container>
  )
}
