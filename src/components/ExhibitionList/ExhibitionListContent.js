import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionsContainer } from './ExhibitionListStyled'
import { ExhibitionCardContent } from './ExhibitionCardContent'

export const ExhibitionListContent = () => {

  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <ExhibitionsContainer>
      {displayedExhibitions.map(exhibition => {
        return <ExhibitionCardContent
          key={exhibition.id}
          filter={activeFilter}
          {...exhibition} />
      })}
    </ExhibitionsContainer>
  )
}