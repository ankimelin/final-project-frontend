import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { HeaderContent } from '../components/Reusable/HeaderContent'
import { AddExhibition } from '../components/Admin/Add/AddExhibition'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledMain'

export const AdminAddExhibition = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoadingAllAdmin(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <AddExhibition />
      <FooterContent />
    </MainContainer >
  )
}