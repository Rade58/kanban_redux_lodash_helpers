import Card from '../components/Card'
import {connect} from 'react-redux'

// DA UVEZEM PRVO STA CE M ITREBATI

import memoize from 'lodash/memoize'
import {createSelector} from 'reselect'

// KREIRAM FUNKCIJU, KOJOJ JE ULOGA DA OD STATE-A UZME LISTE
// PRISTUPI CARD-OVIMA, SVAKE LISTE I PROVERI DA LI JE CARD ID, TRENUTNOG CARD-A
// UNUTAR cards NIZA, I ONDA AKO POSTOJI POKLAPANJE UZIMA SE SE TAJ listId

const getListId = (entities, cardId) => {
  console.log('get list id for the card')

  // SLEDECI ARRAY KOJI SAM NAPRAVIO SASTOJI SE OD CLANOVA
  // A TI CLANOVI SU PODNIZOVI, KOJI U SEBI IMAJU CLANOVE:

  //    list id      
  //    list    OBJEKAT

  //  ovako     [['sdsd456456sd', individualListobject], ['sda55sdasd', individualListobject]...]

  const listObjectsAndidsArray = Object.entries(entities) 

  // sada pokusavam da proverim da li je card id u nekom od ovih objekata

  for(let [idListe, lista] of listObjectsAndidsArray){

    if(lista.cards.includes(cardId)) return idListe

  }

}

// PRAVIM SADA MEMOIZER, FUNKCIJU UZ POMOC  createSelector

// ONO STA SE UPOREDJUJE JESTE DA LI JE ENTITIES ISTO KAO I RANIJE

const takeListId = memoize(createSelector(
  [(state) => state.lists.entities],

  // dakle ova funkcija ce biti pozvna prvi put i bice pozvana ako ima ralike izmedju cache-a i onoga sto ce return-ovati ova funkcija iznad
  getListId
))


const mapStateToProps = (state, ownProps) => {
  
  // NEMOJ OVDE NIST DA MENJAS JER NECE FUNKCIONISATI (IMACES ERROR (PROSLEDICE SE undefined U JEDNOM MOMENTU))

  // SAMO POZOVI GORNJU FUNKCIJU I PRATI REZULTAT KOJI CE SE STAMPATI U KONZOLI TOKOM MANIPULISANJA S KARTICAMA

  takeListId(state, ownProps.cardId)

  // //////////////////////////////


  const cardId = ownProps.cardId
  
  const listId = ownProps.listId

  const cards = state.cards.entities

  const card = cards[cardId]

  return {card, listId, cardId}
}

export default connect(mapStateToProps)(Card)
