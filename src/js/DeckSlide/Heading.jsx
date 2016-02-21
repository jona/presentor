'use strict'

import React from 'react'

export default class DeckSlideHeading extends React.Component {
  static propTypes = {
    slide: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    slide: []
  };

  render() {
    let heading = this.heading()

    if(heading) {
      return <h1>{heading}</h1>
    } else {
      return null
    }
  }

  heading() {
    let arrOfHeadings = this.props.slide.filter(function(el){
      if(Object.keys(el)[0] == "heading"){
        return el
      }
    })

    if(arrOfHeadings.length > 0){
      return arrOfHeadings[0].heading
    } else {
      return null
    }
  }
}
