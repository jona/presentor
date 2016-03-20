'use strict'

import alt from '../../alt'

import CountryStatsActions from '../../actions/CountryStatsActions'
import StatsUtil from './StatsUtil'

class CountryStatsStore {
  constructor(){
    this.chartData = {}

    return this.bindListeners({
      handleUpdateCountryStats: CountryStatsActions.UPDATE_COUNTRY_STATS,
      handleFetchCountryStats: CountryStatsActions.FETCH_COUNTRY_STATS
    });
  }

  handleUpdateCountryStats(data) {
    this.chartData = StatsUtil.prepareChartData(data, 'Country')
    this.chartData.labels = this.labels(data)

    return this
  }

  handleFetchCountryStats() {
    return this.chartData = {}
  }

  labels(data) {
    return data.map(function(el){
      return el.country
    })
  }
}

module.exports = alt.createStore(CountryStatsStore, 'CountryStatsStore')
