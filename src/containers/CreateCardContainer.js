import CreateCard from '../components/CreateCard'
import {connect} from 'react-redux'

const CREATE_CARD = 'CREATE_CARD'

const mapDispatchToProps = (dispatch) => {
  return {

    // createCard WILL BE PASSED INPUT VALUES INSIDE COMPONENT

    // BUT ALSO YOU NEED TO CREATE NEW ID FOR THE NEW CARD

    createCard(listId, {title, description}){

      const cardId = new Date().toString()

      dispatch({type: CREATE_CARD, payload: {listId, cardId, title, description}})
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateCard)

// THIS CONTAINER SHOULD BE USED IN EVERY LIST, SO IT NEEDS TO BE NESTED INSIDE JSX OF List COMPONENT

// // // // // // //

// NOW YOU CAN HANDLE CREATE_CARD ACTION INSIDE REDUCER

// BUT PAY ATTENTION THAT YOU NEED TO DO TAHT IN BOTH REDUCERS

//    list-reducer      NEEDS TO UPDATE           lists.entities.cards        array

//    card-reducer      NEEDS TO ADD, NEW CARD OBJECT     TO cards.entities     (OBJECT THAT INCLUDES id, title, description) (AND HIS KEY SHOULD BE id)

