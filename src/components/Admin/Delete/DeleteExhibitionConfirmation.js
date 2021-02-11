import React from 'react'

import { MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const DeleteExhibitionConfirmation = ({ ...exhibition }) => {

  return (
    <>
      <MessageText>Deleted: {exhibition.title}.</MessageText>
      <ExhibitionsLink to='/admin/exhibitions'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </>
  )
}