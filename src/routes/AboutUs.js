import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/Reusable/HeaderContent'
import { AboutUsContent } from '../components/AboutUs/AboutUsContent'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledContainer'

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
      <AboutUsContent />
      <FooterContent />
    </MainContainer>
  )
}