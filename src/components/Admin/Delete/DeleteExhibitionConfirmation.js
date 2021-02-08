import React from 'react'

import { MessageText, ExhibitionsLink } from '../../Reusable/StyledReusable'

export const DeleteExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <>
      <MessageText>{exhibition.title} deleted!</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </>
  )
}