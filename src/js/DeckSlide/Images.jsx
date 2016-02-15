'use strict'

import React from 'react'
import { Link } from 'react-router'
import request from 'request'

const DeckSlideImages = React.createClass({
  render() {
    let arrOfImages = this.findImages()

    if(arrOfImages.length > 0) {
      let images = arrOfImages.map(function(obj, index) {
        return <DeckSlideImage key={index} src={obj.image} />
      });

      return <div className="images">{images}</div>
    } else {
      return null
    }

  },

  findImages() {
    return this.props.data.slide.filter(function(el){
      if(Object.keys(el)[0] == "image"){
        return el
      }
    })
  }
})

const DeckSlideImage = React.createClass({
  render() {
    return <img src={this.props.src} />
  }
})

module.exports = DeckSlideImages
