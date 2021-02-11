import React from 'react'

import { MessageContainer, MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const AddExhibitionConfirmation = ({ ...exhibition }) => {
  return (
    <MessageContainer>
      <MessageText>Added: {exhibition.title}.</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}