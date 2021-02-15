import React from 'react'

import { UpdateAndDeleteLink } from '../../../styling/StyledExhibitionCard'

export const UpdateExhibitionButton = ({ ...exhibition }) => {

  return (
    <UpdateAndDeleteLink
      to={`/admin/exhibitions/${exhibition.id}/update`}>
      Update Exhibition
    </UpdateAndDeleteLink>
  )
}