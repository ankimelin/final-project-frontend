import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { HeaderContent } from '../../components/HeaderContent'
import { DeleteExhibition } from '../../components/Admin/Delete/DeleteExhibition'
import { FooterContent } from '../../components/FooterContent'
import { MainContainer } from '../StyledRoutes'

export const Delete = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoadingAllAdmin(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <DeleteExhibition />
      <FooterContent />
    </MainContainer >
  )
}