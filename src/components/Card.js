import React from 'react'
import {Card} from '../styles/Card.module.css'

// THIS COMPONENT SHOULD HAVE ACCESS

// AND FOR FUTURE PROOFING SHOULD ALOS HAVE         ID 
// OF THE LIST IN WITCH IT IS NESTED (FOOTURE PROOFING FOR MOVING CARD FROM ONE LIST TO ANOTHER
// OR REMOVING LIST)

export default ({card, listId}) => {
  return (
  <article className={Card}>
    <h3>{card.title}</h3>
    <div>{card.description}</div>
  </article>
  )
}
