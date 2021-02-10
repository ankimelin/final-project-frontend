import React from 'react'
import { useSelector } from 'react-redux'

import {
  ExhibitionCardContainer, ExhibitionCardTextContainer, ExhibitionCardImageContainer,
  ExhibitionCardTitle, ExhibitionCardText, ExhibitionCardDateContainer,
  ExhibitionCardImage, ExhibitionCardImageText,
  ExhibitionCardButtonContainer, UpdateAndDeleteLink
}
  from '../../styling/StyledExhibitionCard'

export const ExhibitionCardContent = ({ admin, ...exhibition }) => {

  const filter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <ExhibitionCardContainer>
      <ExhibitionCardTextContainer >
        <ExhibitionCardTitle>{exhibition.title}</ExhibitionCardTitle>
        <ExhibitionCardDateContainer>
          {filter === 'Ongoing' && !admin ?
            <ExhibitionCardText className='until'>Until</ExhibitionCardText> :
            <>
              <ExhibitionCardText className='date'>{new Date(exhibition.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
              <ExhibitionCardText className='space'>-</ExhibitionCardText>
            </>}
          <ExhibitionCardText className='date'>{new Date(exhibition.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
        </ExhibitionCardDateContainer>
        {admin && <ExhibitionCardText className='museum'>{exhibition.museum}</ExhibitionCardText>}
        {admin && <ExhibitionCardText className='artists'>
          {exhibition.artists.length > 0 ? exhibition.artists.map(artist => artist).join(', ') : null}
        </ExhibitionCardText>}
      </ExhibitionCardTextContainer >
      <ExhibitionCardImageContainer>
        <ExhibitionCardImage src={exhibition.image} />
        <ExhibitionCardImageText>{exhibition.imageText} </ExhibitionCardImageText>
      </ExhibitionCardImageContainer>
      {admin &&
        <>
          <ExhibitionCardButtonContainer>
            <UpdateAndDeleteLink to={`/admin`}>Update Exhibition</UpdateAndDeleteLink>
            <UpdateAndDeleteLink to={`/admin/exhibitions/${exhibition.id}/delete`}>Delete Exhibition</UpdateAndDeleteLink>
          </ExhibitionCardButtonContainer>
        </>}
    </ExhibitionCardContainer >
  )
}