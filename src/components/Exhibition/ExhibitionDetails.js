import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getExhibition } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { GoBackContent } from '../Reusable/GoBackContent'
import { ExhibitionDetailsContent } from './ExhibitionDetailsContent'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionDetails = () => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()
  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loadingOne)
  const exhibition = useSelector(store => store.exhibitions.detailedExhibition)

  const getOneExhibition = () => {
    dispatch(getExhibition(exhibitionId))
  }

  useEffect(getOneExhibition, [])

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading &&
        <>
          <GoBackContent />
          <ExhibitionDetailsContent {...exhibition} />
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}