import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AdminExhibitionList } from '../components/Admin/AdminExhibitionList'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const AdminExhibitions = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoadingOne(true))
    dispatch(exhibitions.actions.setExhibitionDeleted(false))
    dispatch(exhibitions.actions.setExhibitionAdded(false))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <Header />
      <AdminExhibitionList />
      <FooterContent />
    </MainContainer >
  )
}