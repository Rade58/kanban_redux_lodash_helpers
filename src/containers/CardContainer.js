import Card from '../components/Card'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId
  const listId = ownProps.listId

  const cards = state.cards.entities

  const card = cards[cardId]

  return {card, listId}
}

export default connect(mapStateToProps)(Card)
