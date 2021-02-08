import React from 'react'
import { useSelector } from 'react-redux'

import { ExhibitionLink, ExhibitionCardContainer, ExhibitionCardTitle, ExhibitionCardText, ExhibitionCardDateContainer, ExhibitionCardButtonContainer, DeleteLink }
  from './StyledExhibitionList'

export const ExhibitionCard = ({ ...exhibition }) => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)
  const filter = useSelector(store => store.exhibitions.activeFilter)

  return (
    <>
      {!admin &&
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
                  <ExhibitionCardText className='date'>{new Date(exhibition.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
                  <ExhibitionCardText className='space'>-</ExhibitionCardText>
                </>}
              <ExhibitionCardText className='date'>{new Date(exhibition.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</ExhibitionCardText>
            </ExhibitionCardDateContainer>
            <ExhibitionCardText className='museum'>{exhibition.museum}</ExhibitionCardText>
          </ExhibitionCardContainer>
        </ExhibitionLink >}
      {admin &&
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
            <DeleteLink to={`/admin/exhibitions/${exhibition.id}/update`}>Update Exhibition</DeleteLink>
            <DeleteLink to={`/admin/exhibitions/${exhibition.id}/delete`}>Delete Exhibition</DeleteLink>
          </ExhibitionCardButtonContainer>
        </ExhibitionCardContainer>
      }
    </>
  )
}