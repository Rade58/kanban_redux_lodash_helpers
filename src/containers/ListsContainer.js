import Lists from '../components/Lists'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {

  const listIds = state.lists.ids

  return {listIds}

}

export default connect(mapStateToProps)(Lists)