import React from 'react'

import { Text, ExhibitionsLink } from '../../NotFound/NotFoundStyled'
import { Container } from '../../NotFound/NotFoundStyled'

export const AddExhibitionConfirmation = () => {

  return (
    <Container>
      <Text>Exhibition added!</Text>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </Container>
  )
}
