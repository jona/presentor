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
      <ul className="decks">
        {decks}
      </ul>
    )
  }
})

const DeckListItem = React.createClass({
  render() {
    return (
      <li className="deck deck-list">
        <Link to={`/decks/${this.props.name}/slides/1`}><i className="fa fa-tv"></i> {this.props.name}</Link>
      </li>
    )
  }
})

module.exports = DeckList
