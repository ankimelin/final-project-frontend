import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibition } from '../../../reducers/thunks'
import { DeleteExhibitionQuestion } from './DeleteExhibitionQuestion'
import { DeleteExhibitionConfirmation } from './DeleteExhibitionConfirmation'
import { MessageContainer } from '../../StyledComponents'
import { LoaderContent } from '../../LoaderContent'
import { NotFoundAdmin } from '../NotFoundAdmin'

export const DeleteExhibition = () => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingOne)
  const exhibition = useSelector(store => store.exhibitions.detailedExhibition)
  const exhibitionDeleted = useSelector(store => store.exhibitions.exhibitionDeleted)

  const getOneExhibition = () => {
    dispatch(getExhibition(exhibitionId))
  }

  useEffect(getOneExhibition, [])

  return (
    <>
      {status && loading && <LoaderContent />}
      {status && !loading &&
        <MessageContainer>
          {!exhibitionDeleted && <DeleteExhibitionQuestion {...exhibition} />}
          {exhibitionDeleted && <DeleteExhibitionConfirmation {...exhibition} />}
        </MessageContainer >}
      {!status && <NotFoundAdmin />}
    </>
  )
}