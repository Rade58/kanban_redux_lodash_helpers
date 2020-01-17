import {cards as defaultCards} from '../normalized_data' 

// YOU CAN IMPORT pipe, AND set FROM lodash/fp
import set from 'lodash/fp/set'
import pipe from 'lodash/fp/pipe'
//

const CREATE_CARD = 'CREATE_CARD'

export default (cards = defaultCards, action) => {

  if(action.type === CREATE_CARD){

    const cardEntities = cards.entities
    const cardIds = cards.ids

    const {cardId, title, description} = action.payload

    /* 
    return {
      entities: {...cardEntities, [cardId]: {title, description, id: cardId}},
      ids: cardIds.concat(cardId)
    } */

    // 

    // SO, CAN USE pipe IF I HAVE MULTIPLE PROPERTY CHAINS CHAINS

    // IN HAVE ONE CHAIN LIKE THIS

    //      cards       entities        [cardId]          (ADDING A NEW CARD INSIDE ENTITIES)

    // AND THE OTHER CHAIN LIKE THIS

    //     cards          ids


    // THIRD ARGUMENT FOR BOTH set CALLS IS                     cards     (EXISTING CARDS)

    // BETTER YO USEE FROM EXAMPLE

    //                        pipe     CALL        RETURNS A FUNCTION, AND YOU PASS       OBJECT     FROM WHAT YOU WANT TO CREATE NEW OBJECT
    //                                                                                                  BY OVERWRITING SOME SPECIFIED PROPERTIES


    return pipe(
      set(['entities', cardId], {id: cardId, title, description}),      // setted first branch (value for overvriting) 
      set('ids', cards.ids.concat(cardId))    // setted second branch for overwriting

    )(cards)      // YOU ARE CREATING NEW OBJECT FROM       cards


    //     so             cards.entities[cardId]          NEW OBJECT CREATED FOR card.entities

    //    and             cards.ids                       NEW ARRAY WITH ONE NEW MEMBER


      // SO         pipe      IS VERY CONVINIENT


  }

  return cards
}
