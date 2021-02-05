import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Loader/LoaderContent'
import { AddExhibitionButton } from './AddExhibitionButton'
import { ExhibitionListContent } from '../ExhibitionList/ExhibitionListContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'

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
          <AddExhibitionButton />
          < ExhibitionListContent />
        </>}
      {
        !status &&
        <NotFoundContent />
      }
    </>
  )
}