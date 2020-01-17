import {connect} from 'react-redux'
import RemoveCard from '../components/RemoveCard'

const REMOVE_CARD = "REMOVE_CARD"

const mapDispatchToProps = (dispatch, ownProps) => {

  const {cardId, listId} = ownProps         // THESE TWO PROPERTIES ARE PASSED THROU HIGHER ORDER COMPONENT

  return {

    removeCard(){
      dispatch({type: REMOVE_CARD, payload: {listId, cardId}})
    }
  }
}

export default connect(null, mapDispatchToProps)(RemoveCard)

