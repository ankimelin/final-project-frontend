import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Loader/LoaderContent'
import { AddExhibitionLink } from './Add/AddExhibitionLink'
import { ExhibitionListContent } from '../ExhibitionList/ExhibitionListContent'
import { AdminNotFound } from './AdminNotFound'

export const AdminExhibitionList = () => {

  const dispatch = useDispatch()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)

  const getAllExhibitions = () => {
    dispatch(getExhibitions('all'))
  }

  useEffect(getAllExhibitions, [])

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading &&
        <>
          <AddExhibitionLink />
          <ExhibitionListContent />
        </>}
      {
        !status &&
        <AdminNotFound />
      }
    </>
  )
}