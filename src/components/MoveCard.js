import React from 'react'
import {Move} from '../styles/Move.module.css'

export default class extends React.Component {
  

  
  render(){

    // TITLE OF CURRENT LIST, AND TTITLES AND IDS OF ALL LISTS
    const {listTitle, titlesAndIds} = this.props

    return (
    <div className={Move}>
      <form>
        <select name="list_select">
          { titlesAndIds.map(titleAndId => {
            if(titleAndId.title === listTitle){
              return <option selected={true} value={titleAndId.id}>{titleAndId.title}</option>
            }else{
              return <option value={titleAndId.id}>{titleAndId.title}</option>
            }
          } )}
        </select>
        <input type="submit" value="change list" />
      </form>
      
    </div>
    )
  }
}