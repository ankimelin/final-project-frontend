import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionsContainer } from './StyledExhibitionList'
import { ExhibitionCard } from './ExhibitionCard'

export const ExhibitionList = () => {

  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)

  return (
    <ExhibitionsContainer>
      {displayedExhibitions.map(exhibition => {
        return <ExhibitionCard
          key={exhibition.id}
          {...exhibition} />
      })}
    </ExhibitionsContainer>
  )
}