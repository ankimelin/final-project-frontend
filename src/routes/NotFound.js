import React from 'react'

import { Header } from '../components/Header/Header'
import { NotFoundContent } from '../components/NotFound/NotFoundContent'
import { FooterContent } from '../components/Footer/FooterContent'

export const NotFound = () => {

  return (
    <>
      <Header />
      <NotFoundContent />
      <FooterContent />
    </>
  )
}