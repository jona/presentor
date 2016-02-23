'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class DeckSlideNav extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    slideNumber: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    name: '',
    slideNumber: 1
  };

  render() {
    return (
      <li>
        <Link className="btn" activeClassName="active" to={`/decks/${this.props.name}/slides/${this.props.slideNumber}`}>{this.props.slideNumber}</Link>
      </li>
    )
  }
}
