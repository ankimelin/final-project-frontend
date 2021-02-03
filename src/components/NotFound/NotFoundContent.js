import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { NotFoundContainer, NotFoundText, ExhibitionsLink } from './NotFoundStyled'

export const NotFoundContent = () => {

  // move out??
  const dispatch = useDispatch()
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)
  const updateFilter = () => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter: 'Ongoing' }))
  }
  useEffect(updateFilter, [])

  return (
    <NotFoundContainer>
      <NotFoundText>Something went wrong.</NotFoundText>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </NotFoundContainer>
  )
}