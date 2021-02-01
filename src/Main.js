import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { exhibitions } from './reducers/exhibitions'
import { Exhibitions } from './routes/Exhibitions'
import { Exhibition } from './routes/Exhibition'
import { AboutUs } from './routes/AboutUs'
import { NotFound } from './routes/NotFound'

export const Main = () => {

  const dispatch = useDispatch()
  const EXHIBITIONS_URL = 'https://final-project-curated.herokuapp.com/exhibitions'

  const getExhibitions = () => {
    fetch(EXHIBITIONS_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        const options = {
          day: 'numeric', month: 'short', year: 'numeric'
        }
        const exhibitionList =
          json.map(exhibition => {
            return {
              id: exhibition._id,
              title: exhibition.title,
              artists: exhibition.artists,
              startDate: new Date(exhibition.startDate)
                .toLocaleDateString('en-US', options),
              endDate: new Date(exhibition.endDate)
                .toLocaleDateString('en-US', options),
              museum: exhibition.museum
            }
          })
        dispatch(exhibitions.actions.initializeExhibitions(exhibitionList))
      })
      .catch(err => {
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoading(false))
      })
  }

  useEffect(getExhibitions, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/exhibitions' />
        </Route>
        <Route exact path='/exhibitions'>
          <Exhibitions />
        </Route>
        <Route exact path='/exhibitions/:exhibitionId'>
          <Exhibition />
        </Route>
        <Route exact path='/about-us'>
          <AboutUs />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
