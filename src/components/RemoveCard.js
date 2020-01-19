import React from 'react'
import {Remove} from '../styles/Remove.module.css'
import Card from './Card'

// MAYBE IT'S BETTER TO PASS cardId AND listId FROM HERE 

export default ({cardId, listId, removeCard}) => {

  const deleteCard = () => {removeCard(cardId, listId)}

  return <div className={Remove} onClick={deleteCard}></div>
}