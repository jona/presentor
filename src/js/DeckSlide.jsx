'use strict'

import React from 'react'
import { Link } from 'react-router'
import request from 'request'

// Helper Components
import PageNav from './PageNav'

// DeckSlide components
import DeckSlideHeading from './DeckSlide/Heading'
import DeckSlideImages from './DeckSlide/Images'
import DeckSlideParagraphs from './DeckSlide/Paragraphs'

const DeckSlide = React.createClass({
  componentDidMount() {
    this.fetchData(this.props.params);
  },

  componentWillReceiveProps (nextProps) {
    this.fetchData(nextProps.params);
  },

  render() {
    if(this.state){
      let numberOfSlides = this.state.data.slides

      let i = 1
      let nav = []
      while(i <= numberOfSlides){
        nav.push(<DeckSlideNav key={i} name={this.props.params.name} slide={i} />)
        i++
      }

      let btns = this.topNav()

      return (
        <div>
          <PageNav btns={btns} />

          <ul className="slide-nav">
            {nav}
          </ul>

          <div className="slide-holder">
            <div className="slide">
              <DeckSlideHeading data={this.state.data} />
              <DeckSlideImages data={this.state.data} />
              <DeckSlideParagraphs data={this.state.data} />
            </div>
          </div>

        </div>
      )
    } else {
      return null
    }
  },

  fetchData(params) {
    let self = this

    request.get(`${window.location.origin}/api/decks/${params.name}/slide/${params.slide}`,
      function(err, response, body) {
        return self.setState({data: JSON.parse(body)})
      }
    )
  },

  topNav() {
    return [
      {
        text: 'Back to deck',
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
})

const DeckSlideNav = React.createClass({
  render() {
    return (
      <li>
        <Link className="btn" to={`/decks/${this.props.name}/slides/${this.props.slide}`}>{this.props.slide}</Link>
      </li>
    )
  }
})

module.exports = DeckSlide
