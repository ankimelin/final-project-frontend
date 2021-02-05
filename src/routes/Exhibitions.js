import React from 'react'

import { Header } from '../components/Header/Header'
import { ExhibitionList } from '../components/ExhibitionList/ExhibitionList'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibitions = () => {
  return (
    <MainContainer>
      <Header />
      <ExhibitionList />
      <FooterContent />
    </MainContainer>
  )
}