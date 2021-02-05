import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getExhibition } from '../../reducers/thunks'
import { DeleteExhibitionQuestion } from './DeleteExhibitionQuestion'
import { DeleteExhibitionConfirmation } from './DeleteExhibitionConfirmation'
import { Container } from '../NotFound/NotFoundStyled'
import { LoaderContent } from '../Loader/LoaderContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'

export const DeleteExhibition = () => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)
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
        <Container>
          {!exhibitionDeleted && <DeleteExhibitionQuestion {...exhibition} />}
          {exhibitionDeleted && <DeleteExhibitionConfirmation {...exhibition} />}
        </Container >}
      {!status && <NotFoundContent />}
    </>
  )
}
