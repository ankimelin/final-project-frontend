import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { NotFoundContent } from '../NotFound/NotFoundContent'
import { LoaderContent } from '../Loader/LoaderContent'

import { BackContainer, BackIcon, ExhibitionDetailsContainer, ExhibitionDetailsImage, ExhibitionDetailsDateContainer, ExhibitionDetailsTitle, ExhibitionDetailsText, ExternalExhibitionLink }
  from './ExhibitionDetailsStyled'

export const ExhibitionDetails = () => {

  const { exhibitionId } = useParams()
  const EXHIBITION_URL = `https://final-project-curated.herokuapp.com/exhibitions/${exhibitionId}`

  const [exhibition, setExhibition] = useState({})
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)

  // move to thunk??
  const getExhibition = () => {
    fetch(EXHIBITION_URL)
      .then(res => {
        setStatus(res.ok)
        return res.json()
      })
      .then(json => {
        const options = {
          day: 'numeric', month: 'short', year: 'numeric'
        }
        const exhibitionListed = {
          id: json._id,
          title: json.title,
          artists: json.artists,
          startDate: new Date(json.startDate).toLocaleDateString('en-US', options),
          endDate: new Date(json.endDate).toLocaleDateString('en-US', options),
          museum: json.museum,
          link: json.link
        }
        setExhibition(exhibitionListed)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setStatus(false)
        setLoading(false)
      })
  }

  useEffect(getExhibition, [])

  return (
    <>
      {loading && <LoaderContent />}
      {!loading && status && // move out the below to ExhibitionDetailsContent?
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
        </>}
      {!loading && !status && <NotFoundContent />}
    </>
  )
}