import React from 'react'
import {Remove} from '../styles/Remove.module.css'
import Card from './Card'

// pay attention that you need listener too (onClick)

export default ({/*cardId*, listId,*/ removeCard}) => {        // cardId AND listId AREN'T HERE BECAUSE THEY ARE PASSED
                                                          // THROUGH HIGER ORDER COMPONENT (RemoveCardContainer)

  return <div className={Remove} onClick={removeCard}></div>
}