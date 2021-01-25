import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ExhibitionDetails = () => {

  const { exhibitionId } = useParams()

  const EXHIBITION_URL = `http://localhost:8082/exhibitions/${exhibitionId}`

  const [exhibition, setExhibition] = useState({})

  const getExhibition = () => {
    fetch(EXHIBITION_URL)
      .then(res => res.json())
      .then(json => setExhibition(json))
      .catch(err => console.log(err))
  }

  useEffect(getExhibition, [])

  return (
    <>
      <br></br>
      <p>{exhibition.title}</p>
      <p>{exhibition.startDate}</p>
      <p>{exhibition.endDate}</p>
      <p>{exhibition.place}</p>
      <p>{exhibition.link}</p>
      {exhibition.artists && exhibition.artists.length > 0 ?
        exhibition.artists.map(artist => <li key={artist}>{artist}</li>) :
        <p>no artists</p>}
      {exhibition.topExhibition ? <p>top</p> : <p>not top</p>}
    </>
  )
}