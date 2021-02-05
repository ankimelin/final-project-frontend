import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionFilterButton } from './ExhibitionFilterButton'
import { FilterContainer } from './ExhibitionFilterStyled'

export const ExhibitionFilterList = () => {

  const filters = ['Past', 'Ongoing', 'Future']
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <FilterContainer>
      {filters.map(filter =>
        <ExhibitionFilterButton
          key={filter}
          exhibitionList={exhibitionList}
          activeFilter={activeFilter}
          filter={filter}
        />
      )}
    </FilterContainer>
  )
}