import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { ExhibitionFilterList } from './ExhibitionFilterList'
import { AddExhibitionButton } from '../Admin/Add/AddExhibitionButton'
import { ExhibitionListContent } from './ExhibitionListContent'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionList = ({ filter }) => {

  const dispatch = useDispatch()
  const admin = useSelector(store => store.exhibitions.activeAdmin)
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingAll)
  const loadingAdmin = useSelector(store => store.exhibitions.loadingAllAdmin)

  const getAllExhibitions = () => {
    dispatch(getExhibitions(filter))
  }

  useEffect(getAllExhibitions, [])

  return (
    <>
      {!admin &&
        <>
          {status && loading &&
            <LoaderContent />}
          {status && !loading &&
            <>
              <ExhibitionFilterList />
              <ExhibitionListContent />
            </>}
        </>}
      {admin &&
        <>
          {status && loadingAdmin &&
            <LoaderContent />}
          {status && !loadingAdmin &&
            <>
              <AddExhibitionButton />
              <ExhibitionListContent />
            </>}
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}