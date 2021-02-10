import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { getMuseums } from '../reducers/thunks'
import { HeaderContent } from '../components/Reusable/HeaderContent'
import { ExhibitionList } from '../components/Exhibitions/ExhibitionList'
import { FooterContent } from '../components/Reusable/FooterContent'
import { MainContainer } from '../styling/StyledMain'

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
      <ExhibitionList />
      <FooterContent />
    </MainContainer>
  )
}