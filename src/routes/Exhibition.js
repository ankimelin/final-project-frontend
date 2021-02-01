import React from 'react'

import { Menu } from '../components/Menu'
import { Title } from '../components/Title'
import { ExhibitionDetails } from '../components/ExhibitionDetails'
import { Footer } from '../components/Footer'

import { MainContainer } from '../styling/StyledRoutes'

export const Exhibition = () => {

  return (
    <MainContainer>
      <Menu />
      <Title />
      <ExhibitionDetails />
      <Footer />
    </MainContainer>
  )
}