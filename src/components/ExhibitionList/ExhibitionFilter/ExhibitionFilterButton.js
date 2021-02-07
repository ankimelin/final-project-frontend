import React from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../../reducers/exhibitions'
import { FilterButton } from '../StyledExhibitionList'

export const ExhibitionFilterButton = ({ exhibitionList, activeFilter, filter }) => {

  const dispatch = useDispatch()

  const updateFilter = (filter) => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter }))
  }

  return (
    <FilterButton
      className={activeFilter === filter ? 'active' : null}
      onClick={() => updateFilter(filter)}>
      {filter}
    </FilterButton>
  )
}