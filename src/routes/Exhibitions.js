import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/HeaderContent'
import { ExhibitionList } from '../components/ExhibitionList/ExhibitionList'
import { FooterContent } from '../components/FooterContent'
import { MainContainer } from './StyledRoutes'

export const Exhibitions = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(false))
    dispatch(exhibitions.actions.setLoadingOne(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionList />
      <FooterContent />
    </MainContainer>
  )
}