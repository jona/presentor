'use strict'

import alt from '../alt'
import request from 'request'

import DeckListActions from '../actions/DeckListActions'

class DeckListStore {
  constructor() {
    this.decks = []

    return this.bindListeners({
      handleUpdateDeckList: DeckListActions.UPDATE_DECK_LIST,
      handleFetchDeckList: DeckListActions.FETCH_DECK_LIST
    });
  }

  handleUpdateDeckList(decks) {
    return this.decks = decks
  }

  handleFetchDeckList(){
    return this.decks = []
  }

}

module.exports = alt.createStore(DeckListStore, 'DeckListStore');
