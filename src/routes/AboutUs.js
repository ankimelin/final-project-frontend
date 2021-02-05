import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AboutContent } from '../components/AboutUs/AboutContent'
import { FooterContent } from '../components/Footer/FooterContent'

export const AboutUs = () => {

  // move out

  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(false))
  }

  useEffect(activateAdmin, [])

  return (
    <>
      <Header />
      <AboutContent />
      <FooterContent />
    </>
  )
}