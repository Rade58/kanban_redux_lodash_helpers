import {connect} from 'react-redux'
import MoveCard from '../components/MoveCard'

// IMPORT ACTION CREATOR IN HERE
import {moveCard} from '../actions/card-actions'
////////////////////////////


const mapStateToProps = (state, ownProps) => {

  const {lists} = state

  const listsArray = Object.values(lists.entities)

  const {cardId, listId} = ownProps

  return {lists: listsArray, listId, cardId}

}


const mapDispatchToProps = {
  moveCard
}


export default connect(mapStateToProps, mapDispatchToProps)(MoveCard)

