import React from 'react'

import { HeaderContent } from '../components/Header/HeaderContent'
import { NotFoundContent } from '../components/NotFound/NotFoundContent'
import { FooterContent } from '../components/Footer/FooterContent'

export const NotFound = () => {
  return (
    <>
      <HeaderContent />
      <NotFoundContent />
      <FooterContent />
    </>
  )
}