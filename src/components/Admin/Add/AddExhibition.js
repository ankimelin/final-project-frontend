import React from 'react'
import { useSelector } from 'react-redux'

import { AdminNotFound } from '../AdminNotFound'
import { AddExhibitionForm } from './AddExhibitionForm'
import { AddExhibitionConfirmation } from './AddExhibitionConfirmation'

export const AddExhibition = () => {

  const exhibitionAdded = useSelector(store => store.exhibitions.exhibitionAdded)
  const status = useSelector(store => store.exhibitions.status)

  return (
    <>
      {!exhibitionAdded && <AddExhibitionForm />}
      {status && exhibitionAdded && <AddExhibitionConfirmation />}
      {!status && <AdminNotFound />}
    </>
  )
}