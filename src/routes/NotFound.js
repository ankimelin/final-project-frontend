import React from 'react'

import { Header } from '../components/Header/Header'
import { NotFoundContent } from '../components/NotFound/NotFoundContent'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './StyledRoutes'

export const NotFound = () => {
  return (
    <MainContainer>
      <Header />
      <NotFoundContent />
      <FooterContent />
    </MainContainer>
  )
}