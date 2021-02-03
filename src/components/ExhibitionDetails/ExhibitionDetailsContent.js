import React from 'react'

import { BackContainer, BackIcon, ExhibitionDetailsContainer, ExhibitionDetailsImage, ExhibitionDetailsDateContainer, ExhibitionDetailsTitle, ExhibitionDetailsText, ExternalExhibitionLink }
  from './ExhibitionDetailsStyled'

export const ExhibitionDetailsContent = ({ ...exhibition }) => {

  return (
    <>
      <BackContainer to='/exhibitions' >
        <BackIcon
          src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
          alt='go back'>
        </BackIcon>
      </BackContainer>
      <ExhibitionDetailsContainer>
        <ExhibitionDetailsImage
          src='https://images.unsplash.com/photo-1504206673147-8fe6d654bf55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'>
        </ExhibitionDetailsImage>
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
    </>
  )
}