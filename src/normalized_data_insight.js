const {normalize, schema} = require('normalizr')
const fetchedData = require('./gathered_data.json')

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


const normalizedUsers = normalize(arrayOfUsers, [userSchema]) //  { result: [**USER IDS INSIDE**],   entities: { users: {  **KEY(ID)/VALUE PAIRS**  }   }   }

const normalizedLists = normalize(arrayOfLists, [listSchema]) //  {   result: [**LIST IDS INSIDE**],   
//                                                                    entities: { 
//                                                                      lists: {  **KEY(ID)/VALUE PAIRS**  }, cards: {  **KEY(ID)/VALUE PAIRS** }
//                                                                    }   
//                                                                }


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


/* 
console.log( {
  users,
  lists,
  cards
}

) */

console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')

console.log({cardsInsideLists: lists.entities['5e1ca6d7cb194218576d58b9'].cards})
console.log({cards})
console.log({oneCardObject: cards.entities['61047285193']})

console.log({individualList: lists.entities['5e1ca6d7cb194218576d58b9']})

let a = { entry1: {blah: 8}, entry2: {trah: 16}}
let b = { entry1: {blah: 8}, entry2: {trah: 16}}

console.log( { A: Object.values(a) } )
console.log( { B: Object.entries(b) } )
