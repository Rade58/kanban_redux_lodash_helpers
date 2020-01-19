// IMPORTING ACTION TYPES
const CREATE_CARD = "CREATE_CARD"
const REMOVE_CARD = "REMOVE_CARD"
const MOVE_CARD = "MOVE_CARD"

export const createCard = (listId, {title, description}) => {

  const cardId = new Date().toString()

  // DO NOT DISPATCH BECAUSE YOU DON'T NEED     dispatch      (IT'S NOT BEING PASSED FROM ANYWHERE)
  // LIKE I SAID IT IS GOING TO BE CALL UNDER THE HOOD IN mapDispatchToProps WHICH WILL BE OBJECT AND NOT FUNCTION ANYMORE

  // dispatch({type: CREATE_CARD, payload: {listId, cardId, title, description}})

  return {type: CREATE_CARD, payload: {listId, cardId, title, description}}
}


export const removeCard = (cardId, listId) => {
  
  // dispatch({type: REMOVE_CARD, payload: {listId, cardId}})

  return {type: REMOVE_CARD, payload: {listId, cardId}}
}



export const moveCard = ({movingToListId, removingFromListId, cardId}) => {
  
  /* dispatch({
    type: MOVE_CARD,
    payload: {
      movingToListId,
      removingFromListId,
      cardId
    }
  }) */

  return {
    type: MOVE_CARD,
    payload: {
      movingToListId,
      removingFromListId,
      cardId
    }
  } 

}
  

