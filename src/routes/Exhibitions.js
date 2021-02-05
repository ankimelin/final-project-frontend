import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { ExhibitionList } from '../components/ExhibitionList/ExhibitionList'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const Exhibitions = () => {

  //move out
  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(false))
  }

  useEffect(activateAdmin, [])

  return (
    <MainContainer>
      <Header />
      <ExhibitionList />
      <FooterContent />
    </MainContainer>
  )
}