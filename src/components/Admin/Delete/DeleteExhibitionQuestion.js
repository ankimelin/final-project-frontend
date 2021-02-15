import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteExhibition } from '../../../reducers/thunks'
import { ButtonContainer, Button } from '../../../styling/StyledAdmin'
import { MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const DeleteExhibitionQuestion = ({ ...exhibition }) => {

  const dispatch = useDispatch()

  const deleteOneExhibition = () => {
    dispatch(deleteExhibition(exhibition.id))
  }

  return (
    <>
      <MessageText>Are you sure you want to delete {exhibition.title}?</MessageText>
      <ButtonContainer>
        <Button onClick={() => deleteOneExhibition()}>Delete exhibition</Button>
      </ButtonContainer>
      <ExhibitionsLink to={'/admin/exhibitions'}>Go back to exhibitions {'>>'}</ExhibitionsLink>
    </>
  )
}