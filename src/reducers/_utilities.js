// IN THIS FILE YOU WILL USE ALL THESE METHODS FROM lodash/fp
import set from 'lodash/fp/set'
import get from 'lodash/fp/get'
import omit from 'lodash/fp/omit'
import pipe from 'lodash/fp/pipe'

// YOU CAN NOW CREATE ONE METHOD THAT REMOVES SPECIFIED MEMEBER FROM ARRAY

const removeMemberFromArray = (member, array) => array.filter(item => item !== member)

// NOW YOU CAN CREATE THESE TWO METHODS

// -    ONE THAT ADDS OBJECT                entities[id]         (using that to add new card to cards.entities)
//            ALSO ADDS ID TO ids                                          


// -    ONE THAT REMOVES OBJECT FROM        entities[id]          (using that to remove card to cards.entities)
//              ALSO REMOVES ID FROM ids

// ALSO I'LL CREATE TWO FUNCTIONS THAT SHOULD BE USED TO REMOVE/ADD MEMBER TO ARREY THAT IS DEEP INSIDE OBJECT
//      YOU NEED JUST TO SET THAT PROPERTY CHAI NSTARTS WITH entities
//      AND THE OTHER PART OF CHAIN SHOULD BE PASSED ON CALLING


// *****    JUST TO CLERIFY, ALL OF THESE FUNCTIONS MUST RETURN NEW OBJECT    ******
// *****    AND EASY WAY TO DO EXACTLY THAT ARE MENTIONED lodashes FUNCTIONS  ******


export const provideEntity = (state, entity, id) => {    // in my case when you are using this inside separate reducer ,
                                              //  *state* represents only tree of `complete state of redux store`
  return pipe(
    set(['entities', id], entity),
    set('ids', state.ids.concat(id))
  )(state)
}

export const omitEntity = (state, id) => {
  return pipe(
    omit(`entities.${id}`),
    // HERE YOU CAN USE       removeMemberFromArray HELPER
    set('ids', removeMemberFromArray(id, state.ids))
  )(state)
} 

////////////////////////////////////////////  i'll define a little bit different than from the place I saw this pattern   ///

// you don't need pipe IN THESE METHODS BECAUSE YOU ARE CHANGING THING ON SNGLE PATH

export const provideToDeepArray = (state, entityId, chainPartArray, member) => {    // I AM USING ARG CALLED chainPartArray BECAUSE
                                                                                    // YOU CAN IMAGINE SOME PROJECT WHRE ARRAY IS MAYBE
                                                                                    // EVEN DEEPER DOWN INSIDE SOM SUB OF SUB OBJECT OF state
  
  const newArray = get(['entities', entityId, ...chainPartArray])(state).concat(member)

  return set(['entities', entityId, ...chainPartArray], newArray, state)

}

export const omitFromDeepArray = (state, entityId, chainPartArray, member) => {

  const array = get(['entities', entityId, ...chainPartArray])(state)
  const newArray = removeMemberFromArray(member, array)

  return set(['entities', entityId, ...chainPartArray], newArray, state)

}

// NOW USE THESE METHODS IN REDUCERS
