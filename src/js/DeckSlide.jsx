'use strict'

import React from 'react'
import { Link } from 'react-router'
import request from 'request'
import uuid from 'uuid'

// Helper Components
import PageNav from './PageNav'

// DeckSlide components
import DeckSlideHeading from './DeckSlide/Heading'
import DeckSlideImages from './DeckSlide/Images'
import DeckSlideParagraphs from './DeckSlide/Paragraphs'

export default class DeckSlide extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    params: {}
  };

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData(this.props.params);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.params);
  }

  render() {
    let numberOfSlides = this.state.data.slides

    let i = 1
    let nav = []
    while(i <= numberOfSlides){
      nav.push(<DeckSlideNav key={uuid.v4()} name={this.state.name} slide={i} />)
      i++
    }

    let btns = this.topNav()

    return (
      <div>
        <PageNav btns={btns} />

        <h1 className="deck-title"><strong>Deck</strong>: {this.state.name}</h1>

        <ul className="slide-nav">
          {nav}
        </ul>

        <div className="slide-holder">
          <div className="slide">
            <DeckSlideHeading slide={this.state.data.slide} />
            <DeckSlideImages slide={this.state.data.slide} />
            <DeckSlideParagraphs slide={this.state.data.slide} />
          </div>
        </div>

      </div>
    )
  }

  fetchData(params) {
    request.get(`${window.location.origin}/api/decks/${params.name}/slide/${params.slideNumber}`,
      (err, response, body) => {
        return (
          this.setState({
            name: params.name,
            slideNumber: params.slideNumber,
            data: JSON.parse(body)
          })
        )
      }
    )
  }

  topNav() {
    return [
      {
        text: 'Back to deck list',
        link: '/',
        iconClass: 'fa fa-arrow-left'
      },
      {
        text: 'Deck Statistics',
        link: `/decks/${this.props.params.name}/stats`,
        iconClass: 'fa fa-bar-chart'
      }
    ]
  }
}

class DeckSlideNav extends React.Component {
  render() {
    return (
      <li>
        <Link className="btn" activeClassName="active" to={`/decks/${this.props.name}/slides/${this.props.slide}`}>{this.props.slide}</Link>
      </li>
    )
  }
}
