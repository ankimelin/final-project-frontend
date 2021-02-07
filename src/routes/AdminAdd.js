import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { AddExhibition } from '../components/Admin/Add/AddExhibition'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const AdminAdd = () => {

  // move out

  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoading(true))
  }

  useEffect(activateAdmin, [])

  return (
    <MainContainer>
      <Header />
      <AddExhibition />
      <FooterContent />
    </MainContainer >
  )
}