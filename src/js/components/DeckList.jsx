'use strict'

import React from 'react'
import request from 'request'
import { Link } from 'react-router'
import uuid from 'uuid'

import DeckListStore from '../stores/DeckListStore'
import DeckListActions from '../actions/DeckListActions'

export default class DeckList extends React.Component {
  constructor(props) {
    super(props)

    this.state = DeckListStore.getState();

    return this
  }

  componentWillMount(){
    return DeckListStore.listen(this.onChange)
  }

  componentDidMount() {
    return DeckListActions.fetchDeckList()
  }

  componentWillUnmount() {
    return DeckListStore.unlisten(this.onChange)
  }

  onChange = (state) => {
    return this.setState(state)
  };

  render() {
    let decks = this.state.decks.map(function(deck, index) {
      return <DeckListItem key={uuid.v4()} name={deck} />
    });

    return (
      <div>
        <h1 className="deck-list-header">Deck list</h1>

        <ul className="decks">
          {decks}
        </ul>
      </div>
    )
  }
}

class DeckListItem extends React.Component {
  render() {
    return (
      <li className="deck deck-list">
        <Link to={`/decks/${this.props.name}/slides/1`}>
          <header><i className="fa fa-tv"></i> {this.props.name}</header>
        </Link>
      </li>
    )
  }
}
