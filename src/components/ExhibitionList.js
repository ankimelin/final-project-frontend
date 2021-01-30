import React, { useState, useEffect } from 'react'

import { ExhibitionCard } from './ExhibitionCard'
import { TailSpinLoader } from './TailSpinLoader'
import { NotFoundContent } from './NotFoundContent'

import { FilterContainer, FilterButton, ExhibitionsContainer } from '../styling/StyledExhibitionList'

export const ExhibitionList = () => {

  const EXHIBITIONS_URL = 'https://final-project-curated.herokuapp.com/exhibitions'
  const filters = ['Past', 'Ongoing', 'Future']

  const [exhibitions, setExhibitions] = useState([])
  const [displayedExhibitions, setDisplayedExhibitions] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('Ongoing')
  const [status, setStatus] = useState(true)

  const filterAndSortExhibitions = (exhibitions, filter) => {

    const today = new Date(Date.now())

    const filteredExhibitions = exhibitions.filter(exhibition => {
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

    setDisplayedExhibitions(sortedExhibitions)
    setActiveFilter(filter)
  }

  const getExhibitions = () => {
    fetch(EXHIBITIONS_URL)
      .then(res => res.json())
      .then(json => {
        const options = {
          day: 'numeric', month: 'short', year: 'numeric'
        }
        const exhibitionList =
          json.map(exhibition => {
            return {
              id: exhibition._id,
              title: exhibition.title,
              artists: exhibition.artists,
              startDate: new Date(exhibition.startDate)
                .toLocaleDateString('en-US', options),
              endDate: new Date(exhibition.endDate)
                .toLocaleDateString('en-US', options),
              museum: exhibition.museum
            }
          })
        setExhibitions(exhibitionList)
        filterAndSortExhibitions(exhibitionList, activeFilter)
        setLoading(false)
      })
      .catch(err => {
        setStatus(false)
        setLoading(false)
      })
  }

  useEffect(getExhibitions, [])

  return (
    <> {status &&
      <FilterContainer>
        {filters.map(filter => {
          return <FilterButton key={filter}
            className={activeFilter === filter ? 'active' : null}
            onClick={() => filterAndSortExhibitions(exhibitions, filter)}>
            {filter}
          </FilterButton>
        })}
      </FilterContainer>}
      {status && loading &&
        <TailSpinLoader />}
      {status && !loading &&
        <ExhibitionsContainer>
          {displayedExhibitions.map(exhibition => {
            return <ExhibitionCard
              key={exhibition.id}
              filter={activeFilter}
              {...exhibition}
            />
          })}
        </ExhibitionsContainer>
      }
      {!status && <NotFoundContent />}
    </>
  )
}