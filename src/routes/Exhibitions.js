import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/Reusable/HeaderContent'
import { ExhibitionList } from '../components/Exhibitions/ExhibitionList'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledContainer'

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