import {connect} from 'react-redux'
import RemoveCard from '../components/RemoveCard'

// IMPORT ACTION CREATOR
import {removeCard} from '../actions/card-actions'
//


// NO NEED FOR THIS

/* const REMOVE_CARD = "REMOVE_CARD"

const mapDispatchToProps = dispatch => {

  return {

    removeCard(cardId, listId){
      dispatch({type: REMOVE_CARD, payload: {listId, cardId}})
    }
  }
}
 */

// DO IT LIKE THIS
const mapDispatchToProps = {
  removeCard
}
//

export default connect(null, mapDispatchToProps)(RemoveCard)

