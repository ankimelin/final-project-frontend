import React from 'react'

import { Text, ExhibitionsLink } from '../../NotFound/NotFoundStyled'

export const DeleteExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <>
      <Text>{exhibition.title} deleted!</Text>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </>
  )
}
