import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { ExhibitionDetails } from '../components/ExhibitionDetails/ExhibitionDetails'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibition = () => {

  // move out

  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(false))
  }

  useEffect(activateAdmin, [])

  return (
    <MainContainer>
      <Header />
      <ExhibitionDetails />
      <FooterContent />
    </MainContainer>
  )
}