import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionsContainer } from './ExhibitionListStyled'
import { ExhibitionCard } from '../ExhibitionCard/ExhibitionCard'

export const ExhibitionListContent = () => {

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