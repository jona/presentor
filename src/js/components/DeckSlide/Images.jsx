'use strict'

import React from 'react'
import { Link } from 'react-router'
import request from 'request'
import uuid from 'uuid'

export default class DeckSlideImages extends React.Component {
  static propTypes = {
    slide: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    slide: []
  };

  render() {
    let arrOfImages = this.findImages()

    if(arrOfImages.length > 0) {
      let images = arrOfImages.map(function(obj, index) {
        return <DeckSlideImage key={uuid.v4()} src={obj.image} />
      });

      return <div className="images">{images}</div>
    } else {
      return null
    }

  }

  findImages() {
    return this.props.slide.filter(function(el){
      if(Object.keys(el)[0] == "image"){
        return el
      }
    })
  }
}

class DeckSlideImage extends React.Component {
  render() {
    return <img src={this.props.src} />
  }
}
