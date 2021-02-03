import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionCardContent } from '../ExhibitionCard/ExhibitionCardContent'
import { LoaderContent } from '../Loader/LoaderContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'
import { ExhibitionsContainer } from './ExhibitionListStyled'

export const ExhibitionList = () => {

  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)
  const displayedExhibitions = useSelector(store => store.exhibitions.displayedExhibitions)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading && // move out the below to ExhibitionListContent?
        <ExhibitionsContainer>
          {displayedExhibitions.map(exhibition => {
            return <ExhibitionCardContent
              key={exhibition.id}
              filter={activeFilter}
              {...exhibition} />
          })}
        </ExhibitionsContainer>}
      {!status && !loading && <NotFoundContent />}
    </>
  )
}