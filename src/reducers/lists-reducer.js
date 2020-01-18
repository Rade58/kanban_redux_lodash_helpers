import {lists as defaultLists} from '../normalized_data' 

import set from 'lodash/fp/set'


const CREATE_CARD = "CREATE_CARD"
const REMOVE_CARD = "REMOVE_CARD"

// I NEED THIS
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


  // HANDLING MOVING OF CARDS (THIS ACTION NEEDS TO BE HANDLED JUST WITH lsits PART OF THE STATE TREE)

  if(action.type === MOVE_CARD){
    
    const {
      movingToListId,
      removingFromListId,
      cardId
    } = action.payload

    const {entities} = lists

    const loserList = {...entities[removingFromListId]}
    const loserArray = loserList.cards

    const winnerList = {...entities[movingToListId]}
    const winnerArray = winnerList.cards

    // in here i am making changes on arrays, (not making new arrays)
    loserArray.splice(
      loserArray.indexOf(cardId),
      1
    )
    
    winnerArray.push(cardId)
    /////////////////////////////////////////////////////////////////


    // AND I STRUCTURED RETURN VALUE (NEW OBJECT LIKE THIS)

    return {
      ids: lists.ids,
      entities: {
        ...lists.entities,
        [removingFromListId]: loserList,
        [movingToListId]: winnerList
      }
    }


  }


  return lists
}
 