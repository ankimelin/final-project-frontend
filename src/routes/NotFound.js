import React from 'react'

import { HeaderContent } from '../components/HeaderContent'
import { NotFoundContent } from '../components/NotFoundContent'
import { FooterContent } from '../components/FooterContent'
import { MainContainer } from './StyledRoutes'

export const NotFound = () => {
  return (
    <MainContainer>
      <HeaderContent />
      <NotFoundContent />
      <FooterContent />
    </MainContainer>
  )
}