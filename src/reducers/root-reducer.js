import listsReducer from './lists-reducer'        // RESPONSIBLE FOR THE lists TREE OF STATE
                                                // YOU NEEED TO TELL THAT TO    combineReducers

import cardsReducer from './cards-reducer'

import {combineReducers} from 'redux'

export default combineReducers({
  lists: listsReducer,                  // SO listReducer IS RESPONSIBLE FOR lists TREE PART OF TREE, and so on
  cards: cardsReducer
})