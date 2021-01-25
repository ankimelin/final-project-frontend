import React from 'react'

export const ExhibitionCard = ({ ...exhibition }) => {
  return (
    <>
      <br></br>
      <p>{exhibition.title}</p>
      <p>{exhibition.startDate}</p>
      <p>{exhibition.endDate}</p>
      <p>{exhibition.place}</p>
      <p>{exhibition.link}</p>
      {exhibition.artists.length > 0 ?
        exhibition.artists.map(artist => <li key={artist}>{artist}</li>) :
        <p>no artists</p>}
      {exhibition.topExhibition ? <p>top</p> : <p>not top</p>}
    </>
  )
}