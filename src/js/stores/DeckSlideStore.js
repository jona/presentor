'use strict'

import alt from '../alt'
import request from 'request'

import DeckSlideActions from '../actions/DeckSlideActions'

class DeckSlideStore {
  constructor() {
    this.slide = {}

    return this.bindListeners({
      handleUpdateDeckSlide: DeckSlideActions.UPDATE_DECK_SLIDE,
      handleFetchDeckSlide: DeckSlideActions.FETCH_DECK_SLIDE
    });
  }

  handleUpdateDeckSlide(slide) {
    return this.slide = slide
  }

  handleFetchDeckSlide(){
    return this.slide = {}
  }

}

module.exports = alt.createStore(DeckSlideStore, 'DeckSlideStore');
