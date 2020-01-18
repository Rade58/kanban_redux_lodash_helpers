import React from 'react'
import {Card} from '../styles/Card.module.css'
// NEED TO IMPORT MoveCardContainer
import MoveCardContainer from '../containers/MoveCardContainer'

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
    <MoveCardContainer listId={listId} cardId={cardId} />
  </article>
  )
}
