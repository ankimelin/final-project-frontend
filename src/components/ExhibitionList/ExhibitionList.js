import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Loader/LoaderContent'
import { ExhibitionFilterList } from './ExhibitionFilterList'
import { ExhibitionListContent } from './ExhibitionListContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'

export const ExhibitionList = () => {

  const dispatch = useDispatch()
  const filter = useSelector(store => store.exhibitions.activeFilter)
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)

  const getAllExhibitions = () => {
    dispatch(getExhibitions(filter))
  }

  useEffect(getAllExhibitions, [])

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading &&
        <>
          <ExhibitionFilterList />
          <ExhibitionListContent />
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}