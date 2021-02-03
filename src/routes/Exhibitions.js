import React from 'react'

import { HeaderContent } from '../components/Header/HeaderContent'
import { ExhibitionFilter } from '../components/ExhibitionFilter/ExhibitionFilter'
import { ExhibitionList } from '../components/ExhibitionList/ExhibitionList'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibitions = () => {
  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionFilter />
      <ExhibitionList />
      <FooterContent />
    </MainContainer>
  )
}