import {connect} from 'react-redux'

import MoveCard from '../components/MoveCard'

const mapStateToProps = (state, ownProps) => {

  const {lists} = state
  const {cardId, listId} = ownProps

  const entities = lists.entities
  const ids = lists.ids

  const titlesAndIds = ids.map(id => ({id, title: entities[id].title}))

  const listTitle = entities[listId].title

  return {titlesAndIds, cardId, listId, listTitle}

}

const MOVE_CARD = "MOVE_CARD"

const mapDispatchToProps = dispatch => {

  return {
    moveCard({movingToListId, removingFromListId, cardId}){
      dispatch({
        type: MOVE_CARD,
        payload: {
          movingToListId,
          removingFromListId,
          cardId
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveCard)


// YOU NEED TO HANDLE MOVE_CARD type OF ACTION JUST INSIDE lists-reducer.js

// HANDLING     MOVE_CARD  IN POINT OF VIEW OF     cards   IS'NT REQUIRED
// BECAUSE entities OF CARDS DON'T HAVE ANY INFO OF LIST IDS
