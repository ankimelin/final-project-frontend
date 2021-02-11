import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteExhibition } from '../../../reducers/thunks'
import { ButtonContainer, Button } from '../../../styling/StyledAdmin'
import { MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const DeleteExhibitionQuestion = ({ ...exhibition }) => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()

  const deleteOneExhibition = (id) => {
    dispatch(deleteExhibition(id))
  }

  return (
    <>
      <MessageText>Are you sure you want to delete {exhibition.title}?</MessageText>
      <ButtonContainer>
        <Button onClick={() => deleteOneExhibition(exhibitionId)}>Delete exhibition</Button>
      </ButtonContainer>
      <ExhibitionsLink to={'/admin/exhibitions'}>Go back to exhibitions {'>>'}</ExhibitionsLink>
    </>
  )
}