import React from 'react'

import { ExhibitionLink, ExhibitionCardContainer, ExhibitionCardTitle, ExhibitionCardText, ExhibitionCardDateContainer }
  from '../styling/StyledExhibitionCard'

export const ExhibitionCard = ({ filter, ...exhibition }) => {
  return (
    // <ExhibitionLink to={{
    //   pathname: `/exhibitions/${exhibition.id}`,
    //   state: { activeFilter: filter }
    // }}>
    <ExhibitionLink to={`/exhibitions/${exhibition.id}`}>
      <ExhibitionCardContainer>
        <ExhibitionCardTitle>{exhibition.title}</ExhibitionCardTitle>
        <ExhibitionCardText className='artists'>
          {exhibition.artists > 0 ? exhibition.artists.map(artist => artist) : null}
        </ExhibitionCardText>
        <ExhibitionCardDateContainer>
          {filter === 'Ongoing' ?
            <ExhibitionCardText className='until'>Until</ExhibitionCardText> :
            <>
              <ExhibitionCardText className='date'>{exhibition.startDate}</ExhibitionCardText>
              <ExhibitionCardText className='space'>-</ExhibitionCardText>
            </>}
          <ExhibitionCardText className='date'>{exhibition.endDate}</ExhibitionCardText>
        </ExhibitionCardDateContainer>
        <ExhibitionCardText className='museum'>{exhibition.museum}</ExhibitionCardText>
      </ExhibitionCardContainer>
    </ExhibitionLink >
  )
}