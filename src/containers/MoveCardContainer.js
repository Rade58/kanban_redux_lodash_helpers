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

export default connect(mapStateToProps)(MoveCard)
