import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { FilterContainer, FilterButton } from './ExhibitionFilterStyled'

export const ExhibitionFilterContent = () => {
  const dispatch = useDispatch()
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)
  const filters = ['Past', 'Ongoing', 'Future']
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)
  const updateFilter = (filter) => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter }))
  }

  return (
    <>
      <FilterContainer>
        {filters.map(filter => {
          return <FilterButton key={filter}
            className={activeFilter === filter ? 'active' : null}
            onClick={() => updateFilter(filter)}>
            {filter}
          </FilterButton>
        })}
      </FilterContainer>
    </>
  )
}