import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { ExhibitionFilterList } from './ExhibitionFilterList'
import { AddExhibitionButton } from '../Admin/Add/AddExhibitionButton'
import { ExhibitionListContent } from './ExhibitionListContent'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionList = () => {

  const dispatch = useDispatch()
  const admin = useSelector(store => store.exhibitions.activeAdmin)
  const activeFilter = useSelector(store => store.exhibitions.activeFilter)
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingAll)

  const getAllExhibitions = () => {
    let filter
    if (admin) {
      filter = 'all'
    } else {
      filter = activeFilter
    }
    dispatch(getExhibitions(filter))
  }

  useEffect(getAllExhibitions, [])

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading &&
        <>
          {!admin && <ExhibitionFilterList />}
          {admin && <AddExhibitionButton />}
          <ExhibitionListContent />
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}