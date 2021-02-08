import React from 'react'
import { useSelector } from 'react-redux'

import { NotFoundContent } from '../../Reusable/NotFoundContent'
import { AddExhibitionForm } from './AddExhibitionForm'
import { AddExhibitionConfirmation } from './AddExhibitionConfirmation'

export const AddExhibitionContent = () => {

  const exhibitionAdded = useSelector(store => store.exhibitions.exhibitionAdded)
  const status = useSelector(store => store.exhibitions.status)
  const exhibition = useSelector(store => store.exhibitions.addedExhibition)

  return (
    <>
      {!exhibitionAdded && <AddExhibitionForm />}
      {status && exhibitionAdded && <AddExhibitionConfirmation {...exhibition} />}
      {!status && <NotFoundContent />}
    </>
  )
}