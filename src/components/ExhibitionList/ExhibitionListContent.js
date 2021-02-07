import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionsContainer } from './StyledExhibitionList'
import { ExhibitionCardContent } from './ExhibitionCard/ExhibitionCardContent'

export const ExhibitionListContent = () => {

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