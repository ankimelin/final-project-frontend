import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/HeaderContent'
import { AboutContent } from '../components/AboutUsContent'
import { FooterContent } from '../components/FooterContent'
import { MainContainer } from './StyledRoutes'

export const AboutUs = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveFilter('Ongoing'))
    dispatch(exhibitions.actions.setActiveAdmin(false))
    dispatch(exhibitions.actions.setLoadingAll(true))
    dispatch(exhibitions.actions.setLoadingOne(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <AboutContent />
      <FooterContent />
    </MainContainer>
  )
}