import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getExhibition } from '../../reducers/thunks'
import { LoaderContent } from '../Reusable/LoaderContent'
import { GoBackLink } from './GoBackLink'
import { ExhibitionDetails } from './ExhibitionDetails'
import { NotFoundContent } from '../Reusable/NotFoundContent'

export const ExhibitionContent = () => {

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
        < LoaderContent />}
      {status && !loading &&
        <>
          <GoBackLink />
          <ExhibitionDetails {...exhibition} />
        </>}
      {!status &&
        <NotFoundContent />}
    </>
  )
}