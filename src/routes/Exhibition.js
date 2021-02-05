import React from 'react'

import { Header } from '../components/Header/Header'
import { ExhibitionDetails } from '../components/ExhibitionDetails/ExhibitionDetails'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibition = () => {
  return (
    <MainContainer>
      <Header />
      <ExhibitionDetails />
      <FooterContent />
    </MainContainer>
  )
}