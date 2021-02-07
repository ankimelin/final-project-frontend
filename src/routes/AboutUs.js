import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AboutContent } from '../components/AboutUs/AboutContent'
import { FooterContent } from '../components/Footer/FooterContent'

export const AboutUs = () => {

  // move out??
  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(false))
    dispatch(exhibitions.actions.setLoading(true))
    dispatch(exhibitions.actions.setLoadingOne(true))
    dispatch(exhibitions.actions.setActiveFilter('Ongoing'))
  }

  useEffect(clearStates, [])

  return (
    <>
      <Header />
      <AboutContent />
      <FooterContent />
    </>
  )
}