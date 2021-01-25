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
        <Route path='/' exact>
          <Redirect to='/exhibitions' />
        </Route>
        <Route path='/exhibitions' exact>
          <Exhibitions />
        </Route>
        <Route path='/exhibitions/:exhibitionId' exact >
          <Exhibition />
        </Route>
        <Route path='/aboutus' exact>
          <AboutUs />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
