import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { AboutContainer, AboutText } from '../styling/StyledAboutContent'

export const AboutContent = () => {

  const dispatch = useDispatch()
  const updateFilter = () => {
    dispatch(exhibitions.actions.updateExhibitionFilter('Ongoing'))
  }
  useEffect(updateFilter, [])

  return (
    <AboutContainer>
      <AboutText>We are a curated art site, listing top contemporary art exhibitions in Stockholm.</AboutText>
    </AboutContainer>
  )
}