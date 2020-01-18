import {cards as defaultCards, lists} from '../normalized_data' 


import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/fp/omit'

const CREATE_CARD = 'CREATE_CARD'

const REMOVE_CARD = 'REMOVE_CARD'

/// HANDLING     MOVE_CARD  IN POINT OF VIEW OF     cards   IS'NT REQUIRED
// BECAUSE entities OF CARDS DON'T HAVE ANY INFO OF LIST IDS
// const MOVE_CARD = 'MOVE_CARD'   // SO THIS I WRONLY PLACED HERE (IT IS NOT NEEDED BECAUSE I WON'T HANDLE THAT ACTION IN HERE)
// I JUST NEED TO HANDLE ACTION IN lists REDUCER


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


  return cards
}
