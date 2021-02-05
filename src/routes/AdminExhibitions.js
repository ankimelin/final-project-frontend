import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AdminExhibitionList } from '../components/Admin/AdminExhibitionList'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const AdminExhibitions = () => {

  // move out

  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
  }

  useEffect(activateAdmin, [])

  return (
    <MainContainer>
      <Header />
      <AdminExhibitionList />
      <FooterContent />
    </MainContainer >
  )
}