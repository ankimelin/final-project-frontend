import React from 'react'

import { HeaderContent } from '../components/Header/HeaderContent'
import { AdminLogin } from '../components/AdminLogin'
import { FooterContent } from '../components/Footer/FooterContent'

export const Admin = () => {
  return (
    <>
      <HeaderContent />
      <AdminLogin />
      <FooterContent />
    </>
  )
}