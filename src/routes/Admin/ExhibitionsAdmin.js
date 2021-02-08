import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { getMuseums } from '../../reducers/thunks'
import { HeaderContent } from '../../components/Reusable/HeaderContent'
import { ExhibitionsContentAdmin } from '../../components/Admin/ExhibitionsContentAdmin'
import { FooterContent } from '../../components/Reusable/FooterContent'
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

  const getAllMuseums = () => {
    dispatch(getMuseums())
  }

  useEffect(clearStates, [])
  useEffect(getAllMuseums, [])

  return (
    <MainContainer>
      <HeaderContent />
      <ExhibitionsContentAdmin />
      <FooterContent />
    </MainContainer>
  )
}