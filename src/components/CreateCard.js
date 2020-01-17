import React from 'react'

export default class CreateCard extends React.Component {
  
  // THIS IS NEW NOTATION

  // INSTEAD OF DEFINING    constructor       ,       super     CALL
  // AND          this.state          YOU CAN ALL WRIGHT SHORTER, LIKE THIS

  state = {
    title: '',
    description: ''
  }

  // ALSO YOU DON'T NEED TO bind KEYWORD this IN METHODS (AND THAT IS BECAUSE YOU ARE USING ARROW FUNCTIONS)
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // NEXT GETTER WILL ALWAYS GET EMPTY STRING IF ONE OF INPUTS IS EMPTY STRING

  get someInputIsEmpty(){
    return this.state.description && this.state.title
  }

  // inInvalid  JUST USES     !     BECAUSE                 !""   IS  true                  !"anything"         IS      false

  get isInvalid(){
    return !this.someInputIsEmpty
  }

  handleChange = e => {

    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {

    e.preventDefault()

    const {title, description} = this.state

    // mapDispatchToProps IS RESPONSIBLE TO PASS createCard FUNCTION AS A PROP

    const createCard = this.props.createCard

    // but only if one of the inputs isn't EMPTY STRING

    if(this.isInvalid) return;
    
    

    if(createCard){
      
      // DON'T FORGET TO  PASS      listId
      
      
      createCard(this.props.listId, {title, description})
      
      // i added list id because reducers needs to know in what list card is being created 

      // for creation of card id responsible is createCard UNDER THE HOOD (INSIDE CreateCardContainer)

    }
    
    this.setState({
      title: '',
      description: ''
    })
  
  }


  render(){

    const title = this.state.title
    const description = this.state.description

    // PAY ATTENTION ON     disabled    ATRIBUTE (PROP)

    // RE-RENDER (THAT HAPPENS ON CHANGE IN HERE) WILL NATURALY TRIGGER     this.isInvalid
    //                                                                  inside    disabled 

    // handleChange IS REALLY THE ONE WHO TRIGGERS RERENDER (because he changes the state (just a lovcal state of this component))

    // DON'T FORGET TO ATTACH onSubmit

    return (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={this.handleChange}
      />
      <input
        type="submit"
        value="Create new card"
        disabled={this.isInvalid}
      />
    </form>
    )

  }

}