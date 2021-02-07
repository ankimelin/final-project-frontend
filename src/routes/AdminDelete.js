import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../reducers/exhibitions'
import { Header } from '../components/Header/Header'
import { DeleteExhibition } from '../components/Admin/Delete/DeleteExhibition'
import { FooterContent } from '../components/Footer/FooterContent'
import { MainContainer } from './RoutesStyled'

export const AdminDelete = () => {

  // move out

  const dispatch = useDispatch()

  const activateAdmin = () => {
    dispatch(exhibitions.actions.setActiveAdmin(true))
    dispatch(exhibitions.actions.setLoading(true))
  }

  useEffect(activateAdmin, [])

  return (
    <MainContainer>
      <Header />
      <DeleteExhibition />
      <FooterContent />
    </MainContainer >
  )
}