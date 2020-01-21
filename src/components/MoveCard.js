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

    const {listId, lists} = this.props

    return (
    <div className={Move} onSubmit={this.handleSubmit}>
      <form>
        <select name="list_select" defaultValue={listId} onChange={this.handleChange}>
          { lists.map(entity => {
            return <option key={entity.id} value={entity.id}>{entity.title}</option>
          } )}
        </select>
        <input type="submit" value="change list" />
      </form>
      
    </div>
    )
  }
}