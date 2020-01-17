import {normalize, schema} from 'normalizr'
import * as fetchedData from './gathered_data.json'

// for node testing
/* const normalizr = require('normalizr')
const fetchedData = require('./gathered_data.json') */
//

// USERS AND CARDS ISOLATED 

const arrayOfUsers = fetchedData.users
const arrayOfLists = fetchedData.lists
// EVERY LIST OBJECT, HAS ALOSO A cards ARRAY


// NORMALAZING DATA

const userSchema = new schema.Entity('users')         // STRING ARGUMENT DECIDES PROPERTY NAME OF THE OBJECT

const cardSchema = new schema.Entity('cards', {assignedTo: userSchema})

const listSchema = new schema.Entity('lists', {
  cards: [cardSchema]         // THIS YOU'LL HAVE TWO entities INSIDE OBJECT
})

// EVERY OBJECT WILL HAVE entities PROPERTY WITH KEY VALUE PAIRS

// IF YOU WRAP SHEMA IN ARRAY (SECOND ARGUMENT) YOU HAVE ARRAY result ,AND INSIDE WILL BE IDs

const normalizedUsers = normalize(arrayOfUsers, [userSchema]) //  { result: [**USER IDS INSIDE**],   entities: { users: {  **KEY(ID)/VALUE PAIRS**  }   }   }

const normalizedLists = normalize(arrayOfLists, [listSchema]) //  {   result: [**LIST IDS INSIDE**],   
//                                                                    entities: { 
//                                                                      lists: {  **KEY(ID)/VALUE PAIRS**  }, cards: {  **KEY(ID)/VALUE PAIRS** }
//                                                                    }   
//                                                                }

// TO ACCESS normalizedList.entities.lists    NOT IDEAL (SAME GOES FOR USERS TOO)

// ALSO IDS ARE UNDER result (NOT SO SUGESTIVE)

//   ALSO CARDS DON'T HVE ARRAY OF THEIR IDs

///////////////////////////////////////////////////////////////////////////////////////

const users = {
  entities: normalizedUsers.entities.users,
  ids: normalizedUsers.result
}

const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
}

const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
}



// console.log({users: normalizedUsers, lists: normalizedLists})
// console.log({cards: normalizedLists.entities.cards})

export {
  users,
  lists,
  cards
}

// I'LL HAVE THREE REDUCERS (combining INTO ONE REDUCER)

// EVERY ONE OF THEM WILL TAKE CARE OF THEIR OWN BRANCH OF THE STATE TREE

// index.js FILE WILL BE THE ONE WHERE I'LL INSTATITE THE STATE STORE (WHERE ILL WRAP WHOLE APP INTO STATE Provider)
// Provider COMPONENT IS FROM 'react-redux'

// IN EVRY CONTAINER COMPONENT YOU'LL USE mapStateToProps (AND mapDispatchToProps IF REQUIRED)
// YOU'LL PASS THEM TO THE connect HIGHER ORDER COMMPONENT (COMES FROM react-redux), TOGETHER WITH 'NORMAL REACT COMPONENT' 
// connect WILL CREATE NEW COMPONENT WITH PASSED IN PROPS
