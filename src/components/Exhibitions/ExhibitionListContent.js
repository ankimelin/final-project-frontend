import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionListContainer } from '../../styling/StyledContainer'
import { ExhibitionCard } from './ExhibitionCard'

export const ExhibitionListContent = () => {

  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)

  return (
    <ExhibitionListContainer>
      {displayedExhibitions.map(exhibition => {
        return <ExhibitionCard
          key={exhibition.id}
          {...exhibition} />
      })}
    </ExhibitionListContainer>
  )
}