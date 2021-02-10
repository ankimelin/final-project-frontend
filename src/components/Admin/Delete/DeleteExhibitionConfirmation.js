import React from 'react'

import { MessageText } from '../../../styling/StyledText'
import { ExhibitionsLink } from '../../../styling/StyledLink'

export const DeleteExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <>
      <MessageText>{exhibition.title} deleted!</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </>
  )
}