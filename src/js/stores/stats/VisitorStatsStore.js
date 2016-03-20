'use strict'

import alt from '../../alt'

import VisitorStatsActions from '../../actions/VisitorStatsActions'
import StatsUtil from './StatsUtil'

class VisitorStatsStore {
  constructor(){
    this.chartData = {}

    return this.bindListeners({
      handleUpdateVisitorStats: VisitorStatsActions.UPDATE_VISITOR_STATS,
      handleFetchVisitorStats: VisitorStatsActions.FETCH_VISITOR_STATS
    });
  }

  handleUpdateVisitorStats(data) {
    this.chartData = StatsUtil.prepareChartData(data, 'Visitor')
    this.chartData.labels = this.labels(data)

    return this
  }

  handleFetchVisitorStats() {
    return this.chartData = {}
  }

  labels(data) {
    return data.map(function(el){
      return moment.unix(el.timestamp).format("MMM YYYY")
    })
  }
}

module.exports = alt.createStore(VisitorStatsStore, 'VisitorStatsStore')
