import React from 'react'

import { HeaderContent } from '../components/Header/HeaderContent'
import { ExhibitionDetails } from '../components/ExhibitionDetails/ExhibitionDetails'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibition = () => {
  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionDetails />
      <FooterContent />
    </MainContainer>
  )
}