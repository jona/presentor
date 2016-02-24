'use strict'

import request from 'request'

const DeckSource = {
  base: `${window.location.origin}/api`,

  fetchList(cb) {
    let path = '/decks'

    request.get(this.base + path, (err, response, body) => {
      return cb(JSON.parse(body).decks)
    })
  },

  fetchSlide(name, slideNumber, cb){
    let url = `${this.base}/decks/${name}/slide/${slideNumber}`

    request.get(url, (err, response, body) => {
      return cb(JSON.parse(body))
    })
  }
}

module.exports = DeckSource
