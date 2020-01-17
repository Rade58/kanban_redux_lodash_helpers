import {cards as defaultCards} from '../normalized_data' 

const CREATE_CARD = 'CREATE_CARD'

export default (cards = defaultCards, action) => {

  if(action.type === CREATE_CARD){

    // YOU NEED TO CREATE AND RETURN NEW OBJECT (WITH NEW entities AND NEW ids)

    const cardEntities = cards.entities
    const cardIds = cards.ids

    const {cardId, title, description} = action.payload

    return {
      entities: {...cardEntities, [cardId]: {title, description, id: cardId}},
      ids: cardIds.concat(cardId)
    }

  }

  // CURRENT STATE IS PASSED IF THERE'S NO ACTIONS
  return cards
}

// ALSO YOUR list-reducer NEEDS TO RETURN NEW lists OBJECT WITH ADDED ID TO HIS cards ARRAY
// THAT HOLDS ALL THE IDS OS CARDS THAT BELONG TO, MENTIONED LIST 

// YOU WILL NEED listId WHICH IS ON payload TOO (SO YO UCAN ACCESS IT INSIDE list reducer)