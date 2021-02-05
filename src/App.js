import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { exhibitions } from './reducers/exhibitions'
import { Exhibitions } from './routes/Exhibitions'
import { Exhibition } from './routes/Exhibition'
import { AboutUs } from './routes/AboutUs'
import { NotFound } from './routes/NotFound'

const reducer = combineReducers({
  exhibitions: exhibitions.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
