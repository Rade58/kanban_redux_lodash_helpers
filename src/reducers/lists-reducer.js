import {lists as defaultLists} from '../normalized_data' 

import set from 'lodash/fp/set'
// I NEED MORE HELPERS FROM lodash
import get from 'lodash/fp/get'
import omit from 'lodash/fp/omit'
import pipe from 'lodash/fp/pipe'
//

const CREATE_CARD = "CREATE_CARD"
const REMOVE_CARD = "REMOVE_CARD"

//
const MOVE_CARD = "MOVE_CARD"
//



export default (lists = defaultLists, action) => {

  if(action.type === CREATE_CARD){
    const {cardId, listId} = action.payload

    const previousCards = lists.entities[listId].cards
    const cards = previousCards.concat(cardId)

  


    return set(['entities', listId, 'cards'], cards, lists)


  }

  

  if(action.type === REMOVE_CARD){
    const {cardId, listId} = action.payload


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


  // HANDLING MOVING OF CARDS (THIS TIME USING lodash/fp HELPERS)

  if(action.type === MOVE_CARD){
    
    const {
      movingToListId,
      removingFromListId,
      cardId
    } = action.payload


    // OK, INSTEAD OF ALL THIS

    /* const {entities} = lists

    const loserList = {...entities[removingFromListId]}
    const loserArray = loserList.cards

    const winnerList = {...entities[movingToListId]}
    const winnerArray = winnerList.cards

    loserArray.splice(
      loserArray.indexOf(cardId),
      1
    )
    
    winnerArray.push(cardId)

    return {
      ids: lists.ids,
      entities: {
        ...lists.entities,
        [removingFromListId]: loserList,
        [movingToListId]: winnerList
      }
    } */

    // I CAN DO IT LIKE THIS

    // - FIRST LETS USE GET TO ISOLATE ARRAYS

    const loserArray = get(['entities', removingFromListId, 'cards'])(lists)

    const winnerArray = get(['entities', movingToListId, 'cards'])(lists)

    loserArray.splice(
      loserArray.indexOf(cardId),
      1
    )

    winnerArray.push(cardId)
    
    return pipe(
      set(['entities', removingFromListId, 'cards'], loserArray),
      set(['entities', movingToListId, 'cards'], winnerArray)
    )(lists)

    // IT LOOKS MORE CLEANER RIGHT NOW

  }


  return lists
}
 