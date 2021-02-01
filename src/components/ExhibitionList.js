import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { ExhibitionCard } from './ExhibitionCard'
import { TailSpinLoader } from './TailSpinLoader'
import { NotFoundContent } from './NotFoundContent'
import { ExhibitionsContainer } from '../styling/StyledExhibitionList'

export const ExhibitionList = () => {

  const dispatch = useDispatch()

  const EXHIBITIONS_URL = 'https://final-project-curated.herokuapp.com/exhibitions'
  const filteredAndSortedExhibitions = useSelector(store => store.exhibitions.filteredAndSortedExhibitions)
  const [displayedExhibitions, setDisplayedExhibitions] = useState([])
  const loading = useSelector(store => store.exhibitions.loading)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)
  const status = useSelector(store => store.exhibitions.status)

  const filterAndSortExhibitions = (exhibitions) => {

    const today = new Date(Date.now())

    const filteredExhibitions = exhibitions.filter(exhibition => {
      if (activeFilter === 'Ongoing') {
        return (new Date(exhibition.startDate) <= today &&
          new Date(exhibition.endDate) >= today)
      } else if (activeFilter === 'Future') {
        return (new Date(exhibition.startDate) > today)
      } else if (activeFilter === 'Past') {
        return (new Date(exhibition.endDate) < today)
      } else return null
    })

    const sortedExhibitions = filteredExhibitions.sort((a, b) => {
      if (activeFilter === 'Ongoing' || 'Past') {
        return new Date(b.endDate) - new Date(a.endDate)
      } else if (activeFilter === 'Future') {
        return new Date(a.startDate) - new Date(b.startDate)
      } else return null
    })
    setDisplayedExhibitions(sortedExhibitions)
  }

  const getExhibitions = () => {
    fetch(EXHIBITIONS_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
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
        dispatch(exhibitions.actions.setAllExhibitions(exhibitionList))
        filterAndSortExhibitions(exhibitionList)
      })
      .catch(err => {
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoading(false))
      })
  }

  useEffect(getExhibitions, [])

  // move status and loading to route instead? display component based on that, instead of content

  return (
    <>
      { status && loading &&
        <TailSpinLoader />}
      {
        status && !loading && filteredAndSortedExhibitions.length === 0 &&
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
      {
        status && !loading && filteredAndSortedExhibitions.length > 0 &&
        <ExhibitionsContainer>
          {filteredAndSortedExhibitions.map(exhibition => {
            return <ExhibitionCard
              key={exhibition.id}
              filter={activeFilter}
              {...exhibition}
            />
          })}
        </ExhibitionsContainer>
      }
      {
        !status &&
        <NotFoundContent />
      }
    </>
  )
}