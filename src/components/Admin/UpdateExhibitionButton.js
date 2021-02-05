import React from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { ButtonContainer, Button } from './AdminStyled'

export const UpdateExhibitionButton = () => {

  const dispatch = useDispatch()

  const updateExhibition = () => {
    dispatch(exhibitions.actions.setUpdateExhibition(true))
  }

  return (
    <ButtonContainer className='update'>
      <Button className='update' onClick={() => updateExhibition()}>Update Exhibition</Button>
    </ButtonContainer>
  )
}