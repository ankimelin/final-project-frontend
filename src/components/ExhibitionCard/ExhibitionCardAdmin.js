import React from 'react'

import { UpdateExhibitionButton } from '../Admin/UpdateExhibitionButton'
import { ExhibitionCardContainer, ExhibitionCardTitle, ExhibitionCardText, ExhibitionCardDateContainer, ExhibitionCardButtonContainer, DeleteLink }
  from './ExhibitionCardStyled'

export const ExhibitionCardAdmin = ({ ...exhibition }) => {

  return (
    <ExhibitionCardContainer>
      <ExhibitionCardTitle>{exhibition.title}</ExhibitionCardTitle>
      <ExhibitionCardText className='artists'>
        {exhibition.artists > 0 ? exhibition.artists.map(artist => artist) : null}
      </ExhibitionCardText>
      <ExhibitionCardDateContainer>
        <ExhibitionCardText className='date'>{new Date(exhibition.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
        <ExhibitionCardText className='space'>-</ExhibitionCardText>
        <ExhibitionCardText className='date'>{new Date(exhibition.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
      </ExhibitionCardDateContainer>
      <ExhibitionCardText className='museum'>{exhibition.museum}</ExhibitionCardText>
      <ExhibitionCardButtonContainer>
        <UpdateExhibitionButton />
        <DeleteLink to={`/admin/exhibitions/${exhibition.id}/delete`}>Delete Exhibition</DeleteLink>
      </ExhibitionCardButtonContainer>
    </ExhibitionCardContainer>
  )
}