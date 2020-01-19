import CreateCard from '../components/CreateCard'
import {connect} from 'react-redux'

// IMPORT ACTION CREATOR
import {createCard} from '../actions/card-actions'
//

// INSTEAD OF ALL OF THIS

// const CREATE_CARD = 'CREATE_CARD'

/* const mapDispatchToProps = (dispatch) => {
  return {

    createCard(listId, {title, description}){

      const cardId = new Date().toString()

      dispatch({type: CREATE_CARD, payload: {listId, cardId, title, description}})
    }
  }
} */

// YOU JUST NEED THIS

const mapDispatchToProps = {
  createCard
}
//

export default connect(null, mapDispatchToProps)(CreateCard)


