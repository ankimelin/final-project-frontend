import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionFilterContent } from './ExhibitionFilterContent'

export const ExhibitionFilter = () => {

  const status = useSelector(store => store.exhibitions.status)
  const loading = useSelector(store => store.exhibitions.loading)

  return (
    <>
      {status && !loading &&
        <ExhibitionFilterContent />}
    </>
  )
}