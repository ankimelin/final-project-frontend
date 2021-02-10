import React from 'react'

import { MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const DeleteExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <>
      <MessageText>{exhibition.title} deleted.</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </>
  )
}