import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getExhibition } from '../../reducers/thunks'
import { LoaderContent } from '../Loader/LoaderContent'
import { LinkBackContent } from './LinkBackContent'
import { ExhibitionDetailsContent } from './ExhibitionDetailsContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'

export const ExhibitionDetails = () => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)
  const exhibition = useSelector(store => store.exhibitions.detailedExhibition)

  const getDetailedExhibition = () => {
    dispatch(getExhibition(exhibitionId))
  }

  useEffect(getDetailedExhibition, [])

  return (
    <>
      {status && loading &&
        < LoaderContent />}
      {status && !loading &&
        <>
          <LinkBackContent />
          <ExhibitionDetailsContent {...exhibition} />
        </>}
      {
        !status &&
        <NotFoundContent />
      }
    </>
  )
}