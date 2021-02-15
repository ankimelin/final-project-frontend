import React from 'react'

import { UpdateAndDeleteLink } from '../../../styling/StyledExhibitionCard'

export const DeleteExhibitionButton = ({ ...exhibition }) => {

  return (
    <UpdateAndDeleteLink
      to={`/admin/exhibitions/${exhibition.id}/delete`}>
      Delete Exhibition
    </UpdateAndDeleteLink>
  )
}