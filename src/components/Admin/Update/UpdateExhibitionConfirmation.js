import React from 'react'

import { MessageContainer, MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const UpdateExhibitionConfirmation = ({ ...exhibition }) => {
  return (
    <MessageContainer>
      <MessageText>Updated: {exhibition.title}.</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </MessageContainer>
  )
}