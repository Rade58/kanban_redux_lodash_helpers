import {lists as defaultLists} from '../normalized_data' 

import set from 'lodash/fp/set'




const CREATE_CARD = "CREATE_CARD"
// ADDING REMOVAL ACTION TYPE HARDCODED
const REMOVE_CARD = "REMOVE_CARD" 



export default (lists = defaultLists, action) => {

  if(action.type === CREATE_CARD){
    const {cardId, listId} = action.payload

    const previousCards = lists.entities[listId].cards
    const cards = previousCards.concat(cardId)

  


    return set(['entities', listId, 'cards'], cards, lists)


  }

  // you need to define removal of lists[listId].cards[cardId]

  // ofcourse, always return new object (THAT SHOULD BE ALWAYS OBVIOUS, ALWAYS IMMUTABILITY)

  if(action.type === REMOVE_CARD){
    const {cardId, listId} = action.payload

    // ATTENTION!!!!
    // DON'T USE map BECAUSE OF OSIBLE undifined ARRAY MEMBERS


    const cards = []

    lists.entities[listId].cards.forEach(id => { if(id !== cardId) cards.push(id) })


    return {
      entities: {
        ...lists.entities,
        [listId]: {...lists.entities[listId], cards}
      },
      ids: lists.ids
    }

  }



  return lists
}
 