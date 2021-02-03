import React from 'react'
import { useSelector } from 'react-redux'

import { LoaderContent } from '../Loader/LoaderContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'
import { ExhibitionListContent } from './ExhibitionListContent'

export const ExhibitionList = () => {

  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)

  return (
    <>
      {status && loading &&
        <LoaderContent />}
      {status && !loading &&
        <ExhibitionListContent />}
      {!status && !loading &&
        <NotFoundContent />}
    </>
  )
}