import React from 'react'

import { Header } from '../components/Header'
import { ExhibitionDetails } from '../components/ExhibitionDetails'
import { Footer } from '../components/Footer'
import { MainContainer } from '../styling/StyledRoutes'

export const Exhibition = () => {
  return (
    <MainContainer>
      <Header />
      <ExhibitionDetails />
      <Footer />
    </MainContainer>
  )
}