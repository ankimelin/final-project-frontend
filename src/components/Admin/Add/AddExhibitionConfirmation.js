import React from 'react'

import { MessageContainer } from '../../../styling/StyledContainer'
import { MessageText } from '../../../styling/StyledText'
import { ExhibitionsLink } from '../../../styling/StyledLink'

export const AddExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <MessageContainer>
      <MessageText>{exhibition.title} added!</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}