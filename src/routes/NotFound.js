import React from 'react'

import { HeaderContent } from '../components/Reusable/HeaderContent'
import { NotFoundContent } from '../components/Reusable/NotFoundContent'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledMain'

export const NotFound = () => {
  return (
    <MainContainer>
      <HeaderContent />
      <NotFoundContent />
      <FooterContent />
    </MainContainer>
  )
}