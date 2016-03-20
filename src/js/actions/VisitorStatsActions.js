'use strict'

import alt from '../alt'
import StatsSource from '../sources/StatsSource'

class VisitorStatsActions {
  updateVisitorStats(data) {
    return data
  }

  fetchVisitorStats(name) {
    return (dispatch) => {
      dispatch()

      StatsSource.fetchVisitorData(name, (data) => {
        return this.updateVisitorStats(data)
      })
    }
  }
}

module.exports = alt.createActions(VisitorStatsActions)
