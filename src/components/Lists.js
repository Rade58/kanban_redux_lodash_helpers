import ListContainer from '../containers/ListContainer'
import React from 'react'

export default ({listIds}) => {

  return (
  <React.Fragment>
    {listIds.map(listId => 
      <ListContainer key={listId} listId={listId} />)}
  </React.Fragment>
  )

}
