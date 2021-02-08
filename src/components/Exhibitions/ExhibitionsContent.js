import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { ExhibitionFilterList } from './ExhibitionFilter/ExhibitionFilterList'
import { ExhibitionList } from './ExhibitionList/ExhibitionList'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionsContent = () => {

  const dispatch = useDispatch()
  const filter = useSelector(store => store.exhibitions.activeFilter)
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingAll)

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
          <ExhibitionList />
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}