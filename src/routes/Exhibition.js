import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { ExhibitionDetails } from '../components/ExhibitionDetails/ExhibitionDetails'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './StyledRoutes'

export const Exhibition = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setLoadingAll(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <Header />
      <ExhibitionDetails />
      <FooterContent />
    </MainContainer>
  )
}