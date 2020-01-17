import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => { // mapStateToProps HAS ACCESS TO WHOLE STATE
    // YOU CAN PICK WHAT YOU WANT FROM THE STATE 
    // AND PASS IT THROUGH HIGHER ORDER COMPONENT

    // console.log({ownProps})

  return {lists: state.lists}

}

//  connect TAKES 

//  FUNKCTION THAT COMES OUT OF connect CALL NEEDS REGULAR REACT COMPONENT

// OUTPUT IS LIKE I SAID, NEW COMPONENT WITH POPULATED PROPS

// WHICH ARE GIVEN BY mapStateToProps FUNCTION

export default connect(mapStateToProps)((props) => {
    
  const {lists} = props
    
    // console.log(lists)

  return (<div>
    trash   
  </div>)
  
})

