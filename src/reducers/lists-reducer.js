// REDUCERS SCOPE IS RESPONSIBLE FOR CHANGING STATE (INTERCEPTION OF ACTIONS 'MAIN' PURPOSE)

// LIKE I SAID, ONE REDUCER IS RESPONSIBLE FOR
// 'FEEDING' JUST ONE BRANCH OF THE STATE

// SO, THIS REDUCER IS ONLY RESPONSIBILE FOR LISTS


import {lists as defaultLists} from '../normalized_data' 

const CREATE_CARD = "CREATE_CARD"

export default (lists = defaultLists, action) => {

  if(action.type === CREATE_CARD){
    const {cardId, listId} = action.payload

    const cardsOfOneList = lists.entities[listId].cards    // IDS FOR CARDS, THAT BELONGS TO SPECIFIED LIST
    const cards = cardsOfOneList.concat(cardId)

    return {
      entities: {
        ...lists.entities,
        [listId]: {
          ...lists.entities[listId],
          cards
        }
      },

      ids: [...lists.ids]

    }

  }

  // CURRENT STATE IS PASSED IF THERE'S NO ACTIONS
  return lists
}


// THIS REDUCER IS JUST ONE TO BE COMBINED

// RETURNED VALUE OF HE FUNCTION (PART OF THE STATE) WILL BE COMBINED WITH OTHER
// OBJECTS PRODUCED BY OTHER REDUCER (USING combineReducers)
// AND 'COMPLETE' STATE IS FORMED LIKE THAT

// SO MULTIPLE REDUCERS ARE JUST

// OTHER REDUCERS ARE 