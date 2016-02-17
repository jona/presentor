'use strict'

import React from 'react'
import { Link } from 'react-router'
import uuid from 'uuid'

const DeckSlideParagraphs = React.createClass({
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
  },

  findParagraphs() {
    return this.props.data.slide.filter(function(el){
      if(Object.keys(el)[0] == "para"){
        return el
      }
    })
  }
})

const DeckSlideParagraph = React.createClass({
  render() {
    return <p>{this.props.text}</p>
  }
})

module.exports = DeckSlideParagraphs
