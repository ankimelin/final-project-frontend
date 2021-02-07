import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { Header } from '../../components/Header/Header'
import { ExhibitionListAdmin } from '../../components/Admin/ExhibitionListAdmin'
import { FooterContent } from '../../components/Footer/FooterContent'
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
      <Header />
      <ExhibitionListAdmin />
      <FooterContent />
    </MainContainer>
  )
}