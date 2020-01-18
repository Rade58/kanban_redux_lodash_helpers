import {cards as defaultCards, lists} from '../normalized_data' 

// YOU CAN IMPORT pipe, AND set FROM lodash/fp
import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
//

const CREATE_CARD = 'CREATE_CARD'

// ADDING HARDCODED ACTION TYPE NAME
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

    // console.log({cardId, listId})

    //  SO      ID    NEEDS TO BE REMOVED FROM     cards.ids

    // AND      [cardId] : {........}       NEEDS TO BE REMOVEF FROM    cards.entities 

  
    // YOU NEED TO ITERATE

    const keys = Object.keys(cards.entities)

    // console.log(keys)

    const newEntities = {}

    for(let id of keys){
      if(id !== cardId){

        let entity = cards.entities[id]

        // console.log({...entity})

        newEntities[id] = {...entity}
      }
    }

    
    // ATTENTION!!!!
    // DON'T USE map BECAUSE OF POSIBLE undifined ARRAY MEMBERS

    const newIds = []
    
    cards.ids.forEach(id => {
      if(id !== cardId) {
        newIds.push(id)
      }
    })

    console.log({newEntities, newIds})

    
    return {entities: newEntities, ids: newIds}

    // now go to lists reducer

  }  

  return cards
}
