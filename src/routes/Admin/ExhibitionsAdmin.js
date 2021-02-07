import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { HeaderContent } from '../../components/HeaderContent'
import { ExhibitionListAdmin } from '../../components/Admin/ExhibitionListAdmin'
import { FooterContent } from '../../components/FooterContent'
import { MainContainer } from '../StyledRoutes'

export const ExhibitionsAdmin = () => {

  const dispatch = useDispatch()

  const clearStates = () => {
    dispatch(exhibitions.actions.setAddedExhibition(null))
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setExhibitionDeleted(false))
    dispatch(exhibitions.actions.setExhibitionAdded(false))
    dispatch(exhibitions.actions.setLoadingOne(true))
  }

  useEffect(clearStates, [])

  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionListAdmin />
      <FooterContent />
    </MainContainer>
  )
}