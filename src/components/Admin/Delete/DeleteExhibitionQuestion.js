import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteExhibition } from '../../../reducers/thunks'
import { Button } from '../StyledAdmin'
import { MessageText, ExhibitionsLink } from '../../Reusable/StyledReusable'

export const DeleteExhibitionQuestion = ({ ...exhibition }) => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()

  const deleteOneExhibition = (id) => {
    dispatch(deleteExhibition(id))
  }

  return (
    <>
      <MessageText>Are you sure you want to delete {exhibition.title}?</MessageText>
      <Button className='final-delete' onClick={() => deleteOneExhibition(exhibitionId)}>Delete exhibition</Button>
      <ExhibitionsLink to={'/admin/exhibitions'}>Go back to exhibitions {'>>'}</ExhibitionsLink>
    </>
  )
}