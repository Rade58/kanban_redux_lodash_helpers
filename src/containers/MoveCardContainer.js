import {connect} from 'react-redux'
import MoveCard from '../components/MoveCard'
import {moveCard} from '../actions/card-actions'
import { createSelector } from 'reselect' 


// IT TAKES THIS FUNCTIOPN AND RUNS IT ANY TIME
const getListsEntities = state => state.lists.entities


// MEMOIZATION FUNCTION, 
const makeListsArray = createSelector(
  
  [getListsEntities],

          //  IT WILL RETURN

  listEntities => {       //    THIS FUNCTION OR CACHED VALUE IF   getListsEntities OUTPUT IS THE SAME AS CACHED OBJECT

    console.log(listEntities)

    return Object.values(listEntities)
  }
)
// CACHED OBJECT YOU'LL GOT WHEN ABOVE (SECOND ARGUMENT) FUNCTION WASS CALLED LAST TIME

// SO IT CHECKS



const mapStateToProps = (state, ownProps) => {

  // IT IS USED HERE
  const listsArray = makeListsArray(state)

  const {cardId, listId} = ownProps

  return {lists: listsArray, listId, cardId}

}


const mapDispatchToProps = {
  moveCard
}


export default connect(mapStateToProps, mapDispatchToProps)(MoveCard)
