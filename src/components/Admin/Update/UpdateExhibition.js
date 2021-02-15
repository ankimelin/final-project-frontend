import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibition } from '../../../reducers/thunks'
import { LoaderContent } from '../../Reusable/LoaderContent'
import { UpdateExhibitionForm } from './UpdateExhibitionForm'
import { UpdateExhibitionConfirmation } from './UpdateExhibitionConfirmation'
// import { UpdateExhibitionContent } from './UpdateExhibitionContent'
import { NotFoundContent } from '../../Reusable/NotFoundContent'
// import { MessageContainer } from '../../../styling/StyledMessage'

export const UpdateExhibition = () => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingOne)
  const exhibition = useSelector(store => store.exhibitions.detailedExhibition)
  const exhibitionUpdated = useSelector(store => store.exhibitions.exhibitionUpdated)
  const updatedExhibition = useSelector(store => store.exhibitions.updatedExhibition)

  const getOneExhibition = () => {
    dispatch(getExhibition(exhibitionId))
  }

  useEffect(getOneExhibition, [])

  return (
    <>
      {status && loading && <LoaderContent />}
      {status && !loading && !exhibitionUpdated &&
        <UpdateExhibitionForm {...exhibition} />}
      {status && !loading && exhibitionUpdated &&
        <UpdateExhibitionConfirmation {...updatedExhibition} />}
      {!status && <NotFoundContent />}
    </>
  )
}