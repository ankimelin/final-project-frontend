import React from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../reducers/exhibitions'
import { ButtonContainer, Button } from './AdminStyled'

export const AddExhibitionButton = () => {

  const dispatch = useDispatch()

  const addExhibition = () => {
    dispatch(exhibitions.actions.setAddExhibition(true))
  }

  return (
    <ButtonContainer className='add'>
      <Button className='add' onClick={() => addExhibition()}>Add Exhibition</Button>
    </ButtonContainer>
  )
}