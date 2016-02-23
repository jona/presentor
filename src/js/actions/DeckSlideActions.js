'use strict'

import alt from '../alt'
import DeckSource from '../sources/DeckSource'

class DeckSlideActions{
  updateDeckSlide(slide) {
    return slide
  }

  fetchDeckSlide(name, slideNumber){
    return (dispatch) => {

      dispatch()

      DeckSource.fetchSlide(name, slideNumber, (slide) => {
        return this.updateDeckSlide(slide)
      })
    }
  }
}

module.exports = alt.createActions(DeckSlideActions);
