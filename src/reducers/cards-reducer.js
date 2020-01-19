import {cards as defaultCards, lists} from '../normalized_data' 

// THIS I DON'T NEED ANYMORE IN HERE BECAUSE IT IS BEING USED IN HELPERS
/* import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/fp/omit'
*/
///// I NEDD THESE HELPERS I CREATED
import {
  provideEntity, omitEntity,
} from './_utilities'

////////////////////////////////////////////////////

const CREATE_CARD = 'CREATE_CARD'
const REMOVE_CARD = 'REMOVE_CARD'




export default (cards = defaultCards, action) => {

  if(action.type === CREATE_CARD){

    // const cardEntities = cards.entities    // DONT NEED THIS
    // const cardIds = cards.ids              // OR THIS

    const {cardId, title, description} = action.payload

    // NOW INSTEAD OF THIS
    /* return pipe(
      set(['entities', cardId], {id: cardId, title, description}),
      set('ids', cards.ids.concat(cardId))

    )(cards) */

    // I'LL DO IT LIKE THIS

    return provideEntity(cards, {cardId, title, description}, cardId)   // i am doing like this jut everything to be seen

  }

  if(action.type === REMOVE_CARD){

    const {cardId} = action.payload

    // const ids = cards.ids.filter(id => id !== cardId)   // DON'T NEED THIS ANYMORE

    // INSTEAD OF THIS
    /* 
    return pipe(
      omit(`entities.${cardId}`),
      set('ids', ids)
    )(cards)
    */
    // I'LL USE THIS

    return omitEntity(cards, cardId)

  }


  return cards
}
