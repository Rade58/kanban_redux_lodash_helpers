import {cards as defaultCards, lists} from '../normalized_data' 


import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
// IMPORTING omit
import omit from 'lodash/fp/omit'
//

const CREATE_CARD = 'CREATE_CARD'

const REMOVE_CARD = 'REMOVE_CARD'

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

  // HANDLING            'REMOVE_CARD'

  if(action.type === REMOVE_CARD){

    const {cardId, listId} = action.payload


    // ok, this is how I handled removal of card from entities before

    /* 
    const keys = Object.keys(cards.entities)


    const newEntities = {}

    for(let id of keys){
      if(id !== cardId){

        let entity = cards.entities[id]

        newEntities[id] = {...entity}
      }
    } */


    // OK AND THIS IS HOW I HANDLED REMOVAL OF ID FROM ARAY OF IDS BEFORE
    /* 
    const newIds = []
    
    cards.ids.forEach(id => {
      if(id !== cardId) {
        newIds.push(id)
      }
    })

    console.log({newEntities, newIds})
  */
    ////
  //  return {entities: newEntities, ids: newIds}


    // I CAN USE Array.prototype.filter FOR THE ids

    const ids = cards.ids.filter(id => id !== cardId)       // FILTER WILL RETURN NEW ARRAY

    
    // AND THIS IS HOW USE        omit

    return pipe(
      omit(`entities.${cardId}`),
      set('ids', ids)
    )(cards)

      // I THINK THAT CODE SAYS THE STORY (NO NEED FOR EXTRA EXPLANATION)
  }  

  return cards
}
