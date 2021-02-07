import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { Header } from '../../components/Header/Header'
import { AddExhibition } from '../../components/Admin/Add/AddExhibition'
import { FooterContent } from '../../components/Footer/FooterContent'
import { MainContainer } from '../StyledRoutes'

export const Add = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoadingAllAdmin(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <Header />
      <AddExhibition />
      <FooterContent />
    </MainContainer >
  )
}