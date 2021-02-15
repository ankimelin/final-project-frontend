import React from 'react'
import { useSelector } from 'react-redux'

import { UpdateExhibitionButton } from '../Admin/Update/UpdateExhibitionButton'
import { DeleteExhibitionButton } from '../Admin/Delete/DeleteExhibitionButton'
import {
  ExhibitionCardContainer, ExhibitionCardTitle,
  ExhibitionCardDateContainer, ExhibitionCardDate,
  ExhibitionCardMuseum, ExhibitionCardArtists,
  ExhibitionCardImage, ExhibitionCardImageText,
  ExhibitionCardLinkContainer
}
  from '../../styling/StyledExhibitionCard'

export const ExhibitionCardContent = ({ admin, ...exhibition }) => {

  const filter = useSelector(store => store.exhibitions.activeFilter)
  const startDate = new Date(exhibition.startDate).toLocaleDateString('en-US',
    { day: 'numeric', month: 'short', year: 'numeric' })
  const endDate = new Date(exhibition.endDate).toLocaleDateString('en-US',
    { day: 'numeric', month: 'short', year: 'numeric' })
  const today = new Date().setHours(0, 0, 0, 0)
  const oneWeek = 1000 * 60 * 60 * 24 * 7

  return (
    <ExhibitionCardContainer className={admin ? 'admin' : null}>
      <ExhibitionCardTitle>{exhibition.title}</ExhibitionCardTitle>
      <ExhibitionCardDateContainer>{filter === 'Ongoing' && !admin ?
        <ExhibitionCardDate className='until'>Until</ExhibitionCardDate> :
        <><ExhibitionCardDate>{startDate}</ExhibitionCardDate>
          <ExhibitionCardDate className='space'>-</ExhibitionCardDate></>}
        <ExhibitionCardDate>{endDate}</ExhibitionCardDate>
        {((exhibition.endDate - today) >= 0 && (exhibition.endDate - today) < oneWeek) &&
          <ExhibitionCardDate className='last'>Last chance!</ExhibitionCardDate>}
      </ExhibitionCardDateContainer>
      <ExhibitionCardMuseum>{exhibition.museum}</ExhibitionCardMuseum>
      {admin && <ExhibitionCardArtists>{exhibition.artists.length > 0 ?
        exhibition.artists.map(artist => artist).join(', ') :
        null}</ExhibitionCardArtists>}
      <ExhibitionCardImage src={exhibition.image} alt={exhibition.title} />
      <ExhibitionCardImageText>{exhibition.imageText}</ExhibitionCardImageText>
      {admin && <>
        <ExhibitionCardLinkContainer>
          <UpdateExhibitionButton {...exhibition} />
          <DeleteExhibitionButton {...exhibition} />
        </ExhibitionCardLinkContainer> </>}
    </ExhibitionCardContainer >
  )
}