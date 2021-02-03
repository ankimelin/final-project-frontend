import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { LoaderContent } from '../Loader/LoaderContent'
import { ExhibitionDetailsContent } from './ExhibitionDetailsContent'
import { NotFoundContent } from '../NotFound/NotFoundContent'

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
      {loading &&
        <LoaderContent />}
      {!loading && status &&
        <ExhibitionDetailsContent
          key={exhibition.id}
          {...exhibition}
        />}
      {!loading && !status &&
        <NotFoundContent />}
    </>
  )
}