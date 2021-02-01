import React from 'react'

import { Menu } from '../components/Menu'
import { Title } from '../components/Title'
import { NotFoundContent } from '../components/NotFoundContent'
import { Footer } from '../components/Footer'

export const NotFound = () => {
  return (
    <>
      <Menu />
      <Title />
      <NotFoundContent />
      <Footer />
    </>
  )
}