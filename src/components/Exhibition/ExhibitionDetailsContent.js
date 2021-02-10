import React, { useState } from 'react'

import { ExhibitionDetailsContainer, ExhibitionDetailsImage, ExhibitionDetailsImageText, ExhibitionDetailsDateContainer, ExhibitionDetailsTitle, ExhibitionDetailsText, ExternalExhibitionLink }
  from '../../styling/StyledExhibitionDetails'

export const ExhibitionDetailsContent = ({ ...exhibition }) => {

  const [image, setImage] = useState()

  return (
    <>
      <ExhibitionDetailsContainer>
        <ExhibitionDetailsImage onLoad={() => setImage(true)} src={exhibition.image} />
        {image &&
          <>
            <ExhibitionDetailsImageText>{exhibition.imageText}</ExhibitionDetailsImageText>
            <ExhibitionDetailsTitle>{exhibition.title}</ExhibitionDetailsTitle>
            <ExhibitionDetailsDateContainer>
              <ExhibitionDetailsText className='date'>{exhibition.startDate}</ExhibitionDetailsText>
              <ExhibitionDetailsText className='space'>-</ExhibitionDetailsText>
              <ExhibitionDetailsText className='date'>{exhibition.endDate}</ExhibitionDetailsText>
            </ExhibitionDetailsDateContainer>
            <ExhibitionDetailsText className='museum'>{exhibition.museum}</ExhibitionDetailsText>
            <ExhibitionDetailsText className={exhibition.artists.length > 2 ? 'artists many' : 'artists'}>
              {exhibition.artists.length > 0 ? exhibition.artists.map(artist => artist).join(', ') : null}
            </ExhibitionDetailsText>
            <ExternalExhibitionLink href={exhibition.link}>Go to exhibition{'>>'}</ExternalExhibitionLink>
          </>
        }
      </ExhibitionDetailsContainer>
    </>
  )
}