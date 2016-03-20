'use strict'

import React from 'react'
import request from 'request'

// Store
import VisitorStatsStore from '../../stores/stats/VisitorStatsStore'

// Actions
import VisitorStatsActions from '../../actions/VisitorStatsActions'

export default class VisitorStats extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    params: {}
  };

  componentWillMount() {
    return VisitorStatsStore.listen(this.onChange)
  }

  componentDidMount() {
    VisitorStatsActions.fetchVisitorStats(this.props.params.name)
  }

  componentDidUpdate() {
    if(Object.keys(this.state.chartData).length !== 0) {
      let ctx = document.getElementById("visitorChart").getContext("2d");
      return new Chart(ctx).Line(this.state.chartData);
    }
  }

  componentWillUnmount() {
    return VisitorStatsStore.unlisten(this.onChange)
  }

  onChange = (state) => {
    return this.setState(state)
  };

  render() {
    return (
      <div className="chart">
        <h1>Visitor Statistics</h1>
        <canvas id="visitorChart"></canvas>
      </div>
    )
  }
}
