import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { AboutContainer, AboutText } from './AboutStyled'

export const AboutContent = () => {

  // move out the below, to reusable..?
  const dispatch = useDispatch()
  const exhibitionList = useSelector(store => store.exhibitions.allExhibitions)

  const updateFilter = () => {
    dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter: 'Ongoing' }))
  }

  useEffect(updateFilter, [])

  return (
    <AboutContainer>
      <AboutText>We are a curated art site, listing top contemporary art exhibitions in Stockholm.</AboutText>
    </AboutContainer>
  )
}