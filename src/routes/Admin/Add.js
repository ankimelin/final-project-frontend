import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { HeaderContent } from '../../components/Reusable/HeaderContent'
import { AddExhibitionContent } from '../../components/Admin/Add/AddExhibitionContent'
import { FooterContent } from '../../components/Reusable/FooterContent'
import { MainContainer } from '../../styling/StyledContainer'

export const Add = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoadingAllAdmin(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <AddExhibitionContent />
      <FooterContent />
    </MainContainer >
  )
}