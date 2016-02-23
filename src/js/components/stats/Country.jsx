'use strict'

import React from 'react'
import request from 'request'

export default class CountryStats extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    slide: {}
  };

  componentDidMount() {
    this.fetchData(this.props.params, (data) => {
      this.setState({data: data})

      let chartData  = this.prepareDates(data)

      let ctx = document.getElementById("countryChart").getContext("2d");
      new Chart(ctx).Line(chartData);
    })
  }

  render() {
    return (
      <div className="chart">
        <h1>Country Statistics</h1>
        <canvas id="countryChart"></canvas>
      </div>
    )
  }

  fetchData(params, cb) {
    request.get(`${window.location.origin}/api/decks/${params.name}/stats/countries`,
      function(err, response, body){
        return cb(JSON.parse(body))
      }
    )
  }

  prepareDates(data){
    let labels = data.map(function(el){
      return el.country
    })

    let dataPoints = data.map(function(el){
      return el.value
    })

    let chartData = {
      labels: labels,
      datasets: [
        {
          label: "Countries",
          fillColor: "rgba(143,172,248,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(143,172,248,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: dataPoints
        }
      ]
    }

    return chartData
  }
}
