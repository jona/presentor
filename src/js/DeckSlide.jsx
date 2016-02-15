import React from 'react'
import { Link } from 'react-router'
import request from 'request'

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

        return (
          <div>
            <div className="page-nav">
              <Link className="btn" to="/">
                <i className="fa fa-arrow-left"></i> Back to Decks
              </Link>
              <Link className="btn" to={`/decks/${this.props.name}/stats`}>
                <i className="fa fa-bar-chart"></i> Statistics
              </Link>
            </div>

            <div className="slide-holder">
              <div className="slide">
                <DeckSlideHeading data={this.state.data} />
                <DeckSlideImages data={this.state.data} />
                <DeckSlideParagraphs data={this.state.data} />
              </div>
            </div>

            <ul className="slide-nav">
              {nav}
            </ul>
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
