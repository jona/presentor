'use strict'

import React from 'react'
import request from 'request'

// Store
import CountryStatsStore from '../../stores/stats/CountryStatsStore'

// Actions
import CountryStatsActions from '../../actions/CountryStatsActions'

export default class CountryStats extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    params: {}
  };

  componentWillMount() {
    return CountryStatsStore.listen(this.onChange)
  }

  componentDidMount() {
    return CountryStatsActions.fetchCountryStats(this.props.params.name)
  }

  componentDidUpdate() {
    if(Object.keys(this.state.chartData).length !== 0) {
      let ctx = document.getElementById("countryChart").getContext("2d");
      return new Chart(ctx).Line(this.state.chartData);
    }
  }

  componentWillUnmount() {
    return CountryStatsStore.unlisten(this.onChange)
  }

  onChange = (state) => {
    return this.setState(state)
  };

  render() {
    return (
      <div className="chart">
        <h1>Country Statistics</h1>
        <canvas id="countryChart"></canvas>
      </div>
    )
  }
}
