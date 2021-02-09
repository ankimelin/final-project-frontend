import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionCard } from './ExhibitionCard'
import { ExhibitionLink } from './StyledExhibitionCard'

export const ExhibitionCardContent = ({ ...exhibition }) => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <>
      {!admin &&
        <ExhibitionLink to={`/exhibitions/${exhibition.id}`}>
          <ExhibitionCard admin={admin} {...exhibition} />
        </ExhibitionLink >}
      {admin &&
        <ExhibitionCard admin={admin} {...exhibition} />
      }
    </>
  )
}