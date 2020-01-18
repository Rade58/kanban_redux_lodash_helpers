import {cards as defaultCards, lists} from '../normalized_data' 


import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/fp/omit'

const CREATE_CARD = 'CREATE_CARD'

const REMOVE_CARD = 'REMOVE_CARD'

// ADDING NEW ACTION
const MOVE_CARD = 'MOVE_CARD'



export default (cards = defaultCards, action) => {

  if(action.type === CREATE_CARD){

    const cardEntities = cards.entities
    const cardIds = cards.ids

    const {cardId, title, description} = action.payload

    return pipe(
      set(['entities', cardId], {id: cardId, title, description}),
      set('ids', cards.ids.concat(cardId))

    )(cards)

  }

  if(action.type === REMOVE_CARD){

    const {cardId, listId} = action.payload

    const ids = cards.ids.filter(id => id !== cardId)

    return pipe(
      omit(`entities.${cardId}`),
      set('ids', ids)
    )(cards)

  }

  // HANDLING     MOVE_CARD

  if(action.type === MOVE_CARD){
    console.log({...action})
  }

  return cards
}
