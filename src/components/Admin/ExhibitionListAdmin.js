import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Loader/LoaderContent'
import { AddExhibitionLink } from './Add/AddExhibitionButton'
import { ExhibitionListContent } from '../ExhibitionList/ExhibitionListContent'
import { NotFoundAdmin } from './NotFoundAdmin'

export const ExhibitionListAdmin = () => {

  const dispatch = useDispatch()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingAllAdmin)

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
        <NotFoundAdmin />
      }
    </>
  )
}