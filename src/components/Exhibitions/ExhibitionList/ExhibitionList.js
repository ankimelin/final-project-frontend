import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionsContainer } from './StyledExhibitionList'
import { ExhibitionCardContent } from './ExhibitionCardContent'

export const ExhibitionList = () => {

  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)

  return (
    <ExhibitionsContainer>
      {displayedExhibitions.map(exhibition => {
        return <ExhibitionCardContent
          key={exhibition.id}
          {...exhibition} />
      })}
    </ExhibitionsContainer>
  )
}