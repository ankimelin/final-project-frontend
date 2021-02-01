import React from 'react'

import { Header } from '../components/Header'
import { ExhibitionFilter } from '../components/ExhibitionFilter'
import { ExhibitionList } from '../components/ExhibitionList'
import { Footer } from '../components/Footer'
import { MainContainer } from '../styling/StyledRoutes'

export const Exhibitions = () => {
  return (
    <MainContainer>
      <Header />
      <ExhibitionFilter />
      <ExhibitionList />
      <Footer />
    </MainContainer>
  )
}