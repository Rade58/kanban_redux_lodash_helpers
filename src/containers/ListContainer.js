import {connect} from 'react-redux'
import List from '../components/List'

// ownProp              OF HIGHER ORDER COMPOMENT IS

//                                                      id          OF INDIVIDUAL LIST

// WHIT THAT ID, I'LL SEARCH FOR THE LIST            //          state.list      OBJECT                  HOLDS LIST OBJECTS 

const mapStateToProps = (state, ownProps) => {

  const listId = ownProps.listId

  const lists = state.lists.entities

  const list = lists[listId]

  // console.log(list, listId, lists)

  return {list, listId}

}

export default connect(mapStateToProps)(List)

// TO CLERIFY PLURAL Lists COMPONENT WILL GIVE LIST ID TO THE INDIVIDUAL ListContainer

// SO I'M CREATING JSX INSIDE Lists COMPONENT, WHERE I'LL NEST ListContainer

// WHILE PASSING listId

// PASSED ID IS AVAILABLE HERE AS PART OF ownProps