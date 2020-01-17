// I WANT TO USE    set   FROM    lodash/fp 


import {lists as defaultLists} from '../normalized_data' 

// IMPORTING MENTIONED FUNCTION
import set from 'lodash/fp/set'
/////////////////////////////////////
// it takes   3   ARGUMENTS

// - FIRST ARGUMENT IS ARRAY THAT REPRESENTS CHAIN OF PROPERTIES (LAST PROPERTY IN CHAIN IS )
// FOR EXAMPLE IN THIS CASE lists HAS entities, AND entities HAS LIST KEY (AND cards , THE PROPERTY UNDER VALUE OF ID/VALUE PAIR
//                                                                          IS THING TO BE CHAINED) 

// - NEXT ARGUMENT IS THING THAT IS NEW THING, THAT I WANT TO USE TO OVERWRITE OVER, THAT LAST PROPERTY IN THE CHAIN
//                                                                                            (MENTIONED IN PREVIOUS ARGUMENT EXPLANATION)

// - AND THIRD ARGUMENT IS THE THING THAT IS BEING CHANGED

//                                    AND THE THING YOU GET FROM THE set IS NEW OBJECT (BUT THAT IS MODIFIED MENTIIOPNED, THIRD ARGUMENT)


const CREATE_CARD = "CREATE_CARD"

export default (lists = defaultLists, action) => {

  if(action.type === CREATE_CARD){
    const {cardId, listId} = action.payload

    const previousCards = lists.entities[listId].cards
    const cards = previousCards.concat(cardId)            // just to clerify      concat        MAKES NEW ARRAY

    // NEXT COMMENTED OUT OBJECT WAS HERE BEFORE (SO USAGE OF THIS OBJECT NEEDS TO BE SWAPPED IN FAVOR OF set)
    /* 

    // ONE NEW ENTITY IS BEING ADDED
    // AND THAT ENTY HAS cards ARRAY WITH ALL CARDS THAT BELONGS TO THE LIST
    // TO THAT ARRAY YOU NEED TO ANN ONE MORE CARD ID

    return {
      entities: {
        ...lists.entities,
        [listId]: {
          ...lists.entities[listId],
          cards
        }
      },

      // OK THIS IS NOT WHAT SHOULD BE CHANGED
      // BECAUSE IN THIS EXAMPLE ARRAY OF LISTS IS UNCHANGED, BECAUSE YOU-RE NOT
      // ADDING ANY LISTS
      ids: lists.ids          // so it is passed the same value

    } */

    // OK, IN THIS CASE YOU ARE CHANGING WHOLE      lists     PART OF STATE

    //          SO      lists       IS                THIRD ARGUMENT


    // OK, WHAT ARE YOU OVERWRITING?     YOU ARE OVERWRITING JUST cards ARRAY

    //          SO      NEW CARDS ARRAY, WHIT ADDED ONE MORE CARD ID IS         SECOND ARGUMENT


    // OK, WHAT IS THE CHAIN O PROPERTIES YOU NEED TO USE ON      lists


    //          IT IS             entities            [listId]                cards


    return set(['entities', listId, 'cards'], cards, lists)


  }

  // CURRENT STATE IS PASSED IF THERE'S NO ACTIONS (that is always the case and that is well known)
  return lists
}


// THIS REDUCER IS JUST ONE TO BE COMBINED

// RETURNED VALUE OF HE FUNCTION (PART OF THE STATE) WILL BE COMBINED WITH OTHER
// OBJECTS PRODUCED BY OTHER REDUCER (USING combineReducers)
// AND 'COMPLETE' STATE IS FORMED LIKE THAT

// SO MULTIPLE REDUCERS ARE JUST

// OTHER REDUCERS ARE 