import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteExhibition } from '../../reducers/thunks'
import { Button } from './AdminStyled'
import { Text, ExhibitionsLink } from '../NotFound/NotFoundStyled'

export const DeleteExhibitionQuestion = ({ ...exhibition }) => {

  const dispatch = useDispatch()
  const { exhibitionId } = useParams()

  const deleteOneExhibition = (id) => {
    dispatch(deleteExhibition(id))
  }

  return (
    <>
      <Text>Are you sure you want to delete {exhibition.title}?</Text>
      <Button className='final-delete' onClick={() => deleteOneExhibition(exhibitionId)}>Delete exhibition</Button>
      <ExhibitionsLink to={'/admin/exhibitions'}>Go back to exhibitions {'>>'}</ExhibitionsLink>
    </>
  )
}
