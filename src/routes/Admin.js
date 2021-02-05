import React from 'react'

import { Header } from '../components/Header/Header'
import { AdminLogin } from '../components/AdminLogin'
import { FooterContent } from '../components/Footer/FooterContent'

export const Admin = () => {
  return (
    <>
      <Header />
      <AdminLogin />
      <FooterContent />
    </>
  )
}