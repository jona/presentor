'use strict'

import React from 'react'
import request from 'request'
import { Link } from 'react-router'
import uuid from 'uuid'

export default class DeckList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    request.get(`${window.location.origin}/api/decks`,
      (err, response, body) => {
        return this.setState({data: JSON.parse(body).decks})
      }
    )
  }

  render() {
    let decks = this.state.data.map(function(deck, index) {
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
