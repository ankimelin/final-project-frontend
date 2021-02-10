import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionListContainer } from '../../styling/StyledExhibitionList'
import { ExhibitionCard } from './ExhibitionCard'

export const ExhibitionListContent = () => {

  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)
  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <ExhibitionListContainer className={admin ? 'admin' : null}>
      {displayedExhibitions.map(exhibition => {
        return <ExhibitionCard
          key={exhibition.id}
          {...exhibition} />
      })}
    </ExhibitionListContainer>
  )
}