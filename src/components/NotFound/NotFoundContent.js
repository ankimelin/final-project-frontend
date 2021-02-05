import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { Container, Text, ExhibitionsLink } from './NotFoundStyled'

export const NotFoundContent = () => {

  // move out??
  const dispatch = useDispatch()
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)

  const updateFilter = () => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter: 'Ongoing' }))
  }

  useEffect(updateFilter, [])

  return (
    <Container>
      <Text>Something went wrong.</Text>
      <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>
    </Container>
  )
}