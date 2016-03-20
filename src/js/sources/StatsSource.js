'use strict'

import request from 'request'

const DeckSource = {
  base: `${window.location.origin}/api`,

  fetchVisitorData(name, cb) {
    let path = `/decks/${name}/stats/visitors`

    request.get(this.base + path, (err, response, body) => {
      return cb(JSON.parse(body))
    })
  },

  fetchCountryData(name, cb){
    let path = `/decks/${name}/stats/countries`

    request.get(this.base + path, (err, response, body) => {
      return cb(JSON.parse(body))
    })
  }
}

module.exports = DeckSource
