import React from 'react'

import { Header } from '../components/Header.js'
import { ExhibitionList } from '../components/ExhibitionList.js'
import { ExhibitionFilter } from '../components/ExhibitionFilter.js'

export const Exhibitions = () => {
  return (
    <>
      <Header />
      <ExhibitionFilter />
      <ExhibitionList />
    </>
  )
}