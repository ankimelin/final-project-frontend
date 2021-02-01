import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionCard } from './ExhibitionCard'
import { TailSpinLoader } from './TailSpinLoader'
import { NotFoundContent } from './NotFoundContent'
import { ExhibitionsContainer } from '../styling/StyledExhibitionList'

export const ExhibitionList = () => {

  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)
  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <>
      {status && loading &&
        <TailSpinLoader />}
      {status && !loading &&
        < ExhibitionsContainer >
          {
            displayedExhibitions.map(exhibition => {
              return <ExhibitionCard
                key={exhibition.id}
                filter={activeFilter}
                {...exhibition}
              />
            })
          }
        </ExhibitionsContainer>
      }
      {
        !status &&
        <NotFoundContent />
      }
    </>
  )
}