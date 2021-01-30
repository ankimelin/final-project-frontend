import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Exhibitions } from './routes/Exhibitions.js'
import { Exhibition } from './routes/Exhibition.js'
import { AboutUs } from './routes/AboutUs.js'
import { NotFound } from './routes/NotFound.js'

export const App = () => {
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
