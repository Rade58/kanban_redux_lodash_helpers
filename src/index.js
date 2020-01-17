import React from 'react'
import {render} from 'react-dom'
import App from './App'

// NEED TO WRAP App INSIDE STATE PROVIDER
// FOR THE START YOU CAN CREATE JUST ONE REDUCER
// 'COMBINE JUST HIM' (USE JUST HIM WITH combineReducer FUNCTION) 

// AND BUILD FROM THERE, ADD OTHER REDUCER ONE LATER

// SO CALLED rootReducer WILL BE PRODUCED BY combineReducers FUNCTION ('redux')
// AND USED WITH A STORE IN HERE

import rootReducer from './reducers/root-reducer'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

// STATE STORE

const store = createStore(rootReducer)


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// JUST TO CLERIFY , INITIAL STATE IS HANDLED IN REDUCERS TOO