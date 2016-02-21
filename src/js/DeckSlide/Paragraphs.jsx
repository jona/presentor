'use strict'

import React from 'react'
import { Link } from 'react-router'
import uuid from 'uuid'

export default class DeckSlideParagraphs extends React.Component {
  static propTypes = {
    slide: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    slide: []
  };

  render() {
    let arrOfParagraphs = this.findParagraphs()

    if(arrOfParagraphs.length > 0) {
      let paragraphs = arrOfParagraphs.map(function(obj, index) {
        return <DeckSlideParagraph key={uuid.v4()} text={obj.para} />
      });

      return <div className="paragraphs">{paragraphs}</div>
    } else {
      return null
    }
  }

  findParagraphs() {
    return this.props.slide.filter(function(el){
      if(Object.keys(el)[0] == "para"){
        return el
      }
    })
  }
}

class DeckSlideParagraph extends React.Component {
  render() {
    return <p>{this.props.text}</p>
  }
}
