import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { exhibitions } from './reducers/exhibitions'
import { Main } from './Main'

const reducer = combineReducers({
  exhibitions: exhibitions.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
