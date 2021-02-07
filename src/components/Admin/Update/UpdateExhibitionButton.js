import React from 'react'
import { useDispatch } from 'react-redux'

import { exhibitions } from '../../../reducers/exhibitions'
import { LinkContainer, Button } from '../AdminStyled'

export const UpdateExhibitionButton = () => {

  const dispatch = useDispatch()

  const updateExhibition = () => {
    dispatch(exhibitions.actions.setUpdateExhibition(true))
  }

  return (
    <LinkContainer className='update'>
      <Button className='update' onClick={() => updateExhibition()}>Update Exhibition</Button>
    </LinkContainer>
  )
}