'use strict'

import alt from '../alt'
import DeckSource from '../sources/DeckSource'

class DeckListActions{
  updateDeckList(decks) {
    return decks
  }

  fetchDeckList(){
    return (dispatch) => {

      dispatch()

      DeckSource.fetchList((decks) => {
        return this.updateDeckList(decks)
      })
    }
  }
}

module.exports = alt.createActions(DeckListActions);
