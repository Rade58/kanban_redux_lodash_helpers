import {lists as defaultLists} from '../normalized_data' 

// don't need these anymore
/* import set from 'lodash/fp/set'
import get from 'lodash/fp/get'
import omit from 'lodash/fp/omit' 
import pipe from 'lodash/fp/pipe' */
//
// I NEED THESE
import {provideToDeepArray, omitFromDeepArray} from './_utilities'
///////////////////////////////////////////////


const CREATE_CARD = "CREATE_CARD"
const REMOVE_CARD = "REMOVE_CARD"
const MOVE_CARD = "MOVE_CARD"


export default (lists = defaultLists, action) => {

  if(action.type === CREATE_CARD){
    const {cardId, listId} = action.payload

    // const previousCards = lists.entities[listId].cards     // NO NEED FOR THIS ANYMORE
    // const cards = previousCards.concat(cardId)

  
    // INSTEAD OF THIS
    // return set(['entities', listId, 'cards'], cards, lists)

    // I'LL DO IT LIKE THIS

    return provideToDeepArray(lists, listId, ['cards'], cardId)

  }

  

  if(action.type === REMOVE_CARD){
    
    const {cardId, listId} = action.payload

    // const cards = []       // DON'T NEED THIS

    // lists.entities[listId].cards.forEach(id => { if(id !== cardId) cards.push(id) })    // or this


    // INSTEAD OF THIS
    /* 
    return {
      entities: {
        ...lists.entities,
        [listId]: {...lists.entities[listId], cards}
      },
      ids: lists.ids
    } */

    // I'LL USE THIS

    return omitFromDeepArray(lists, listId, ['cards'], cardId)

  }



  if(action.type === MOVE_CARD){
    
    const {
      movingToListId,
      removingFromListId,
      cardId
    } = action.payload


    // OK DON'T NEED ALL OF THIS

    /* const loserArray = get(['entities', removingFromListId, 'cards'])(lists)

    const winnerArray = get(['entities', movingToListId, 'cards'])(lists)

    loserArray.splice(
      loserArray.indexOf(cardId),
      1
    )

    winnerArray.push(cardId)
    
    return pipe(
      set(['entities', removingFromListId, 'cards'], loserArray),
      set(['entities', movingToListId, 'cards'], winnerArray)
    )(lists) */

    // BECAUSE I'LL DO IT LIKE THIS

    // OK THIS WILL BE TRICKY JUST AT FIRST, BUT YOU NEED TO NOTICE THIS IN TERMS OF USING LODASH FUNCTIONS

    // WHEN YOU REMOVE ONE ID , BY USING METHOD, YOU'LL GET AN OBJECT THAT IS COMPLETLY SAME LAIKE STATE (lists IN THIS CASE)
    // **BUT ONLY ONE ENTITI WIL HAVE cards ARAY WITHOUT ONE MEMEBER**

    const newState = omitFromDeepArray(lists, removingFromListId, ['cards'], cardId)
    
    // AND YOU RETURN THE PRODUCT OF      provideToDeepArray      BUT AS AN INPUT YOU'LL USED STATE THAT MISSING ONE MEMEBER IN HIS cards ARRAY
                                                                                                                    // PRETTY SMART AIN'T IT?
    
    return provideToDeepArray(newState, movingToListId, ['cards'], cardId) 

  }


  return lists
}
 