import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { NotFoundContainer, NotFoundText, ExhibitionsLink } from '../styling/StyledNotFoundContent'

export const NotFoundContent = () => {

  const dispatch = useDispatch()
  const updateFilter = () => {
    dispatch(exhibitions.actions.updateExhibitionFilter('Ongoing'))
  }
  useEffect(updateFilter, [])

  return (
    <NotFoundContainer>
      <NotFoundText>Something went wrong.</NotFoundText>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </NotFoundContainer>
  )
}