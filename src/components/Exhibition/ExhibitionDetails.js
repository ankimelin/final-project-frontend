import React from 'react'

import { ExhibitionDetailsContainer, ExhibitionDetailsImage, ExhibitionDetailsImageText, ExhibitionDetailsDateContainer, ExhibitionDetailsTitle, ExhibitionDetailsText, ExternalExhibitionLink }
  from './StyledExhibition'

export const ExhibitionDetails = ({ ...exhibition }) => {
  return (
    <ExhibitionDetailsContainer>
      <ExhibitionDetailsImage src={exhibition.image}></ExhibitionDetailsImage>
      <ExhibitionDetailsImageText>{exhibition.imageText}</ExhibitionDetailsImageText>
      <ExhibitionDetailsTitle>{exhibition.title}</ExhibitionDetailsTitle>
      <ExhibitionDetailsText className='artists'>
        {exhibition.artists > 0 ? exhibition.artists.map(artist => artist) : null}
      </ExhibitionDetailsText>
      <ExhibitionDetailsDateContainer>
        <ExhibitionDetailsText className='date'>{exhibition.startDate}</ExhibitionDetailsText>
        <ExhibitionDetailsText className='space'>-</ExhibitionDetailsText>
        <ExhibitionDetailsText className='date'>{exhibition.endDate}</ExhibitionDetailsText>
      </ExhibitionDetailsDateContainer>
      <ExhibitionDetailsText className='museum'>{exhibition.museum}</ExhibitionDetailsText>
      <ExternalExhibitionLink href={exhibition.link}>Go to exhibition{'>>'}</ExternalExhibitionLink>
    </ExhibitionDetailsContainer>
  )
}