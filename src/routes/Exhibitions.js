import React from 'react'

import { Menu } from '../components/Menu'
import { Title } from '../components/Title'
import { ExhibitionFilter } from '../components/ExhibitionFilter'
import { ExhibitionList } from '../components/ExhibitionList'
import { Footer } from '../components/Footer'

import { MainContainer } from '../styling/StyledRoutes'

export const Exhibitions = () => {

  return (
    <MainContainer>
      <Menu />
      <Title />
      <ExhibitionFilter />
      <ExhibitionList />
      <Footer />
    </MainContainer>
  )
}