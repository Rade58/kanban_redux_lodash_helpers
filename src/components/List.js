import {List} from '../styles/List.module.css'
import React from 'react'

import CardContainer from '../containers/CardContainer'
import CreateCardContainer from '../containers/CreateCardContainer'

// mapStateToProps    NEED TO PASS IN PROPS TO THIS COMPONENT

export default ({list = {}}) => {

  const title = list.title
  const listId = list.id
  const cardIds = list.cards

  // console.log({title, listId, cardIds})


  // Cards OR CardsContainer NEED JUST TO BE FED WITH THIR IDS OR ID OF THE LIST THEY BELONG IN

  // WILL GIVE LIST ID TO CARDS FOR FUTUE PROOFING (IF CARDS NEEDS TO BE REMOVED OR MOVED)


  // DON'T FORGET TO ADD listId TO THE CreateCardContainer ELEMENT

  return(
  <article className={List}>
    <h2>{title}</h2>
    {cardIds.map(cardId => {
      return (<CardContainer cardId={cardId} key={cardId} listId={listId} />)
    })}
    <CreateCardContainer listId={listId} />
  </article>
  )
}


// LISTS CONTAINER WILL BE RESPONSIBLE FOR PASSING DOWN THE LIST IDS AND CARD ID-S 