'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import DeckList from './components/DeckList'
import DeckSlide from './components/DeckSlide'
import Stats from './components/Stats'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={DeckList} />
      <Route path="/decks/:name/slides/:slideNumber" component={DeckSlide} />
      <Route path="/decks/:name/stats" component={Stats} />
    </Router>
  ),
  document.getElementById('app')
)
