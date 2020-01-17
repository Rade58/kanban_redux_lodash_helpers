import React from 'react'
import {Card} from '../styles/Card.module.css'

// THIS COMPONENT SHOULD HAVE ACCESS

// AND FOR FUTURE PROOFING SHOULD ALOS HAVE         ID 
// OF THE LIST IN WITCH IT IS NESTED (FOOTURE PROOFING FOR MOVING CARD FROM ONE LIST TO ANOTHER
// OR REMOVING LIST)

// ALSO YOU NEED cardId FROM FUTURE PROVING (BUT NOW FUTURE HAS COME WHERE I NEED TO USE cardId AND listId)

/////////////////
import Remove from './RemoveCard'
import RemoveCardContainer from '../containers/RemoveCardContainer'
/////////////////


export default ({card, listId, cardId}) => {
  return (
  <article className={Card}>
    <h3>{card.title}</h3>
    <div>{card.description}</div>
    <RemoveCardContainer listId={listId} cardId={cardId} />
  </article>
  )
}
