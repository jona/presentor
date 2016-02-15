'use strict'

import React from 'react'
import request from 'request'
import { Link } from 'react-router'

const DeckList = React.createClass({
  getInitialState() {
    return {data: []}
  },

  componentDidMount() {
    let self = this

    request.get(`${window.location.origin}/api/decks`,
      function(err, response, body) {
        return self.setState({data: JSON.parse(body).decks})
      }
    )
  },

  render() {
    let decks = this.state.data.map(function(deck, index) {
      return <DeckListItem key={index} name={deck} />
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
})

const DeckListItem = React.createClass({
  render() {
    return (
      <li className="deck deck-list">
        <Link to={`/decks/${this.props.name}/slides/1`}>
          <header><i className="fa fa-tv"></i> {this.props.name}</header>
        </Link>
      </li>
    )
  }
})

module.exports = DeckList
