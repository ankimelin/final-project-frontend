import React, { useState } from 'react'

import {
  ExhibitionDetailsContainer,
  ExhibitionDetailsImage, ExhibitionDetailsImageText,
  ExhibitionDetailsDateContainer, ExhibitionDetailsDate,
  ExhibitionDetailsTitle, ExhibitionDetailsMuseum,
  ExhibitionDetailsArtists, ExternalExhibitionLink
}
  from '../../styling/StyledExhibitionDetails'

export const ExhibitionDetailsContent = ({ ...exhibition }) => {

  const [image, setImage] = useState()

  return (
    <>
      <ExhibitionDetailsContainer>
        <ExhibitionDetailsImage onLoad={() => setImage(true)} src={exhibition.image} alt={exhibition.title} />
        {image &&
          <>
            <ExhibitionDetailsImageText>{exhibition.imageText}</ExhibitionDetailsImageText>
            <ExhibitionDetailsTitle>{exhibition.title}</ExhibitionDetailsTitle>
            <ExhibitionDetailsDateContainer>
              <ExhibitionDetailsDate>{exhibition.startDate}</ExhibitionDetailsDate>
              <ExhibitionDetailsDate className='space'>-</ExhibitionDetailsDate>
              <ExhibitionDetailsDate className='date'>{exhibition.endDate}</ExhibitionDetailsDate>
            </ExhibitionDetailsDateContainer>
            <ExhibitionDetailsMuseum>{exhibition.museum}</ExhibitionDetailsMuseum>
            <ExhibitionDetailsArtists className={exhibition.artists.length > 2 ? 'many' : null}>
              {exhibition.artists.length > 0 ? exhibition.artists.map(artist => artist).join(', ') : null}
            </ExhibitionDetailsArtists>
            <ExternalExhibitionLink href={exhibition.link} target='blank'>Go to exhibition{'>>'}</ExternalExhibitionLink>
          </>
        }
      </ExhibitionDetailsContainer>
    </>
  )
}