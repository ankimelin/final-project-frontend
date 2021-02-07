import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AboutContent } from '../components/AboutUs/AboutContent'
import { FooterContent } from '../components/Footer/FooterContent'
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
      <Header />
      <AboutContent />
      <FooterContent />
    </MainContainer>
  )
}