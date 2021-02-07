import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { exhibitions } from './reducers/exhibitions'
import { Exhibitions } from './routes/Exhibitions'
import { Exhibition } from './routes/Exhibition'
import { AboutUs } from './routes/AboutUs'
import { AdminExhibitions } from './routes/AdminExhibitions'
import { AdminAdd } from './routes/AdminAdd'
import { AdminUpdate } from './routes/AdminUpdate'
import { AdminDelete } from './routes/AdminDelete'
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
          <Route exact path='/admin'>
            <Redirect to='/admin/exhibitions' />
          </Route>
          <Route exact path='/admin/exhibitions'>
            <AdminExhibitions />
          </Route>
          <Route exact path='/admin/exhibitions/add'>
            <AdminAdd />
          </Route>
          <Route exact path='/admin/exhibitions/:exhibitionId/update'>
            <AdminUpdate />
          </Route>
          <Route exact path='/admin/exhibitions/:exhibitionId/delete'>
            <AdminDelete />
          </Route>
          <Route exact path='/not-found'>
            <NotFound />
          </Route>
          <Route >
            <Redirect to='/not-found' />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
