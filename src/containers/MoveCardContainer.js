import {connect} from 'react-redux'
import MoveCard from '../components/MoveCard'

// IMPORT ACTION CREATOR IN HERE
import {moveCard} from '../actions/card-actions'
////////////////////////////


const mapStateToProps = (state, ownProps) => {

  const {lists} = state
  const {cardId, listId} = ownProps

  const entities = lists.entities
  const ids = lists.ids

  const titlesAndIds = ids.map(id => ({id, title: entities[id].title}))

  const listTitle = entities[listId].title

  return {titlesAndIds, cardId, listId, listTitle}

}


// INSTEAD OF ALL OF THIS



/* const MOVE_CARD = "MOVE_CARD"

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
 */
// YOU JUST NEED THIS

const mapDispatchToProps = {
  moveCard
}


export default connect(mapStateToProps, mapDispatchToProps)(MoveCard)

