import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/Reusable/HeaderContent'
import { ExhibitionDetails } from '../components/Exhibition/ExhibitionDetails'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledMain'

export const Exhibition = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setLoadingAll(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionDetails />
      <FooterContent />
    </MainContainer>
  )
}