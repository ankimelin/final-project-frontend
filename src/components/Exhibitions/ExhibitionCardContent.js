import React from 'react'
import { useSelector } from 'react-redux'

import {
  ExhibitionCardContainer, ExhibitionCardTitle,
  ExhibitionCardDateContainer, ExhibitionCardDate,
  ExhibitionCardMuseum, ExhibitionCardArtists,
  ExhibitionCardImage, ExhibitionCardImageText,
  ExhibitionCardLinkContainer, UpdateAndDeleteLink
}
  from '../../styling/StyledExhibitionCard'

export const ExhibitionCardContent = ({ admin, ...exhibition }) => {

  const filter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <ExhibitionCardContainer className={admin ? 'admin' : null}>
      <ExhibitionCardTitle>{exhibition.title}</ExhibitionCardTitle>
      <ExhibitionCardDateContainer>{filter === 'Ongoing' && !admin ?
        <ExhibitionCardDate className='until'>Until</ExhibitionCardDate> :
        <><ExhibitionCardDate>{new Date(exhibition.startDate).toLocaleDateString('en-US',
          { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardDate>
          <ExhibitionCardDate className='space'>-</ExhibitionCardDate></>}
        <ExhibitionCardDate>{new Date(exhibition.endDate).toLocaleDateString('en-US',
          { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardDate>
      </ExhibitionCardDateContainer>
      {admin && <ExhibitionCardMuseum>{exhibition.museum}</ExhibitionCardMuseum>}
      {admin && <ExhibitionCardArtists>{exhibition.artists.length > 0 ?
        exhibition.artists.map(artist => artist).join(', ') :
        null}</ExhibitionCardArtists>}
      <ExhibitionCardImage src={exhibition.image} alt={exhibition.title} />
      <ExhibitionCardImageText>{exhibition.imageText}</ExhibitionCardImageText>
      {admin && <>
        <ExhibitionCardLinkContainer>
          <UpdateAndDeleteLink
            to={`/admin/exhibitions/${exhibition.id}/update`}>
            Update Exhibition
              </UpdateAndDeleteLink>
          <UpdateAndDeleteLink
            to={`/admin/exhibitions/${exhibition.id}/delete`}>
            Delete Exhibition
              </UpdateAndDeleteLink>
        </ExhibitionCardLinkContainer> </>}
    </ExhibitionCardContainer >
  )
}