import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionCardContent } from './ExhibitionCardContent'
import { ExhibitionLink } from '../../styling/StyledExhibitionCard'

export const ExhibitionCard = ({ ...exhibition }) => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <>
      {!admin &&
        <ExhibitionLink to={`/exhibitions/${exhibition.id}`}>
          <ExhibitionCardContent admin={admin} {...exhibition} />
        </ExhibitionLink >}
      {admin &&
        <ExhibitionCardContent admin={admin} {...exhibition} />
      }
    </>
  )
}