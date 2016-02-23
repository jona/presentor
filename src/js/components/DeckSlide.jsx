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

//Nav component
import DeckSlideNav from './DeckSlide/Nav'

//Store
import DeckSlideStore from '../stores/DeckSlideStore'

//Actions
import DeckSlideActions from '../actions/DeckSlideActions'

export default class DeckSlide extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    params: {}
  };

  constructor(props) {
    super(props)

    this.state = DeckSlideStore.getState()

    return this
  }

  componentWillMount() {
    return DeckSlideStore.listen(this.onChange)
  }

  componentDidMount() {
    return DeckSlideActions.fetchDeckSlide(this.props.params.name, this.props.params.slideNumber)
  }

  componentWillReceiveProps(nextProps) {
    return DeckSlideActions.fetchDeckSlide(nextProps.params.name, nextProps.params.slideNumber)
  }

  componentWillUnmount(){
    return DeckSlideStore.unlisten(this.onChange)
  }

  onChange = (state) => {
    return this.setState(state)
  };

  render() {
    let numberOfSlides = this.state.slide.slides

    let i = 1
    let nav = []
    while(i <= numberOfSlides){
      nav.push(<DeckSlideNav key={uuid.v4()} name={this.props.params.name} slideNumber={i} />)
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
            <DeckSlideHeading slide={this.state.slide.slide} />
            <DeckSlideImages slide={this.state.slide.slide} />
            <DeckSlideParagraphs slide={this.state.slide.slide} />
          </div>
        </div>

      </div>
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
