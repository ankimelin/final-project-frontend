import React from 'react'

import { MessageContainer, MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const AddExhibitionConfirmation = ({ ...exhibition }) => {
  return (
    <MessageContainer>
      <MessageText>{exhibition.title} added.</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}