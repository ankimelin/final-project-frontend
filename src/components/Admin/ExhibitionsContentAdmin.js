import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibitions } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { AddExhibitionButton } from './Add/AddExhibitionButton'
import { ExhibitionList } from '../Exhibitions/ExhibitionList/ExhibitionList'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionsContentAdmin = () => {

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
        <><AddExhibitionButton />
          <ExhibitionList />
        </>}
      {
        !status &&
        <NotFoundContent />
      }
    </>
  )
}