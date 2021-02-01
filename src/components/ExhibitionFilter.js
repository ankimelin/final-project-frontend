import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { FilterContainer, FilterButton } from '../styling/StyledExhibitionList'

export const ExhibitionFilter = () => {

  const dispatch = useDispatch()

  const filters = ['Past', 'Ongoing', 'Future']
  const allExhibitions = useSelector(store => store.exhibitions.allExhibitions)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)

  const filterAndSortExhibitions = (filter) => {

    const today = new Date(Date.now())

    const filteredExhibitions = allExhibitions.filter(exhibition => {
      if (filter === 'Ongoing') {
        return (new Date(exhibition.startDate) <= today &&
          new Date(exhibition.endDate) >= today)
      } else if (filter === 'Future') {
        return (new Date(exhibition.startDate) > today)
      } else if (filter === 'Past') {
        return (new Date(exhibition.endDate) < today)
      } else return null
    })

    const sortedExhibitions = filteredExhibitions.sort((a, b) => {
      if (filter === 'Ongoing' || 'Past') {
        return new Date(b.endDate) - new Date(a.endDate)
      } else if (filter === 'Future') {
        return new Date(a.startDate) - new Date(b.startDate)
      } else return null
    })
    dispatch(exhibitions.actions.setFilteredAndSortedExhibitions(sortedExhibitions))
  }

  const updateFilter = (filter) => {
    dispatch(exhibitions.actions.setActiveFilter(filter))
    filterAndSortExhibitions(filter)
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