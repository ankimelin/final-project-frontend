import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { HeaderContent } from '../../components/Reusable/HeaderContent'
import { DeleteExhibitionContent } from '../../components/Admin/Delete/DeleteExhibitionContent'
import { FooterContent } from '../../components/Reusable/FooterContent'
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
      <DeleteExhibitionContent />
      <FooterContent />
    </MainContainer >
  )
}