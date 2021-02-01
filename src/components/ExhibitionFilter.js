import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { FilterContainer, FilterButton } from '../styling/StyledExhibitionList'

export const ExhibitionFilter = () => {

  const dispatch = useDispatch()

  const filters = ['Past', 'Ongoing', 'Future']

  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)

  const updateFilter = (filter) => {
    dispatch(exhibitions.actions.updateFilter(filter))
  }

  return (
    <>
      {status && !loading &&
        < FilterContainer >
          {
            filters.map(filter => {
              return <FilterButton key={filter}
                className={activeFilter === filter ? 'active' : null}
                onClick={() => updateFilter(filter)}>
                {filter}
              </FilterButton>
            })
          }
        </FilterContainer>}
    </>
  )
}