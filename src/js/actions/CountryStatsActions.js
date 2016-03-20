'use strict'

import alt from '../alt'
import StatsSource from '../sources/StatsSource'

class CountryStatsActions {
  updateCountryStats(data) {
    return data
  }

  fetchCountryStats(name) {
    return (dispatch) => {
      dispatch()

      StatsSource.fetchCountryData(name, (data) => {
        return this.updateCountryStats(data)
      })
    }
  }
}

module.exports = alt.createActions(CountryStatsActions)
