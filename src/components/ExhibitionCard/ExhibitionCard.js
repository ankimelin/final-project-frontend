import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionCardContent } from './ExhibitionCardContent'
import { AdminExhibitionCardContent } from '../Admin/AdminExhibitionCardContent'

export const ExhibitionCard = ({ ...exhibition }) => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <>
      {!admin &&
        <ExhibitionCardContent
          {...exhibition} />}
      {admin &&
        <AdminExhibitionCardContent
          {...exhibition} />}
    </>
  )
}