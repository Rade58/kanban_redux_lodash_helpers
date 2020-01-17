import {cards as defaultCards} from '../normalized_data' 

const CREATE_CARD = 'CREATE_CARD'

export default (cards = defaultCards, action) => {

  if(action.type === CREATE_CARD){

    const cardEntities = cards.entities
    const cardIds = cards.ids

    const {cardId, title, description} = action.payload


    return {
      entities: {...cardEntities, [cardId]: {title, description, id: cardId}},
      ids: cardIds.concat(cardId)
    }

  }

  return cards
}
