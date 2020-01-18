import React from 'react'
import {Move} from '../styles/Move.module.css'

export default class extends React.Component {
  
  state = {
    movingToListId: this.props.listId,
    removingFromListId: this.props.listId
  }

  handleChange = e => {
    const id = e.target.value

    this.setState(prevState => {
      return {...prevState, movingToListId: id}
    })

  }


  handleSubmit = e => {

    e.preventDefault()

    const {moveCard, cardId} = this.props

    const {movingToListId, removingFromListId} = this.state

    moveCard({movingToListId, removingFromListId, cardId})

  }

  
  render(){

    // ID OF CURRENT LIST, AND TTITLES AND IDS OF ALL LISTS
    const {listId, titlesAndIds} = this.props

    return (
    <div className={Move} onSubmit={this.handleSubmit}>
      <form>
        <select name="list_select" defaultValue={listId} onChange={this.handleChange}>
          { titlesAndIds.map(titleAndId => {
            return <option key={titleAndId.id} value={titleAndId.id}>{titleAndId.title}</option>
          } )}
        </select>
        <input type="submit" value="change list" />
      </form>
      
    </div>
    )
  }
}