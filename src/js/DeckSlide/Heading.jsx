'use strict'

import React from 'react'

const DeckSlideHeading = React.createClass({
  render() {
    let heading = this.heading()

    if(heading) {
      return <h1>{heading}</h1>
    } else {
      return null
    }
  },

  heading() {
    let arrOfHeadings = this.props.data.slide.filter(function(el){
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
})

module.exports = DeckSlideHeading
