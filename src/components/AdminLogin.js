import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'

export const AdminLogin = () => {

  // move out?
  const dispatch = useDispatch()
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)
  const updateFilter = () => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter: 'Ongoing' }))
  }
  useEffect(updateFilter, [])

  return (
    <>
      <p>Hej from adminlogin</p>
    </>
  )
}