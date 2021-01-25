import React, { useState, useEffect } from 'react'

import { ExhibitionCard } from './ExhibitionCard.js'

export const ExhibitionList = () => {

  const EXHIBITION_URL = 'https://final-project-curated.herokuapp.com/exhibitions'

  const [exhibitions, setExhibitions] = useState([])

  const getExhibitions = () => {
    fetch(EXHIBITION_URL)
      .then(res => res.json())
      .then(json => setExhibitions(json))
      .catch(err => console.log(err))
  }

  useEffect(getExhibitions, [])

  return (
    <>
      {exhibitions.map(exhibition => {
        return <ExhibitionCard
          key={exhibition._id}
          {...exhibition}
        />
      })}
    </>
  )
}