'use strict'

import React from 'react'
import request from 'request'

const VisitorStats = React.createClass({
  componentDidMount() {
    let self = this

    this.fetchData(this.props.params, function(data){
      self.setState({data: data})

      let chartData  = self.prepareDates(data)

      let ctx = document.getElementById("visitorChart").getContext("2d");
      new Chart(ctx).Line(chartData);
    });
  },

  render() {
    return (
      <div className="chart">
        <h1>Visitor Statistics</h1>
        <canvas id="visitorChart"></canvas>
      </div>
    )
  },

  fetchData(params, cb) {
    let self = this

    request.get(`${window.location.origin}/api/decks/${params.name}/stats/visitors`,
      function(err, response, body) {
        return cb(JSON.parse(body))
      }
    )
  },

  prepareDates(data){
    let labels = data.map(function(el){
      return moment.unix(el.timestamp).format("MMM YYYY")
    })

    let dataPoints = data.map(function(el){
      return el.value
    })

    let chartData = {
      labels: labels,
      datasets: [
        {
          label: "Visitors",
          fillColor: "rgba(164,229,254,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(164,229,254,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: dataPoints
        }
      ]
    }

    return chartData
  }
});

module.exports = VisitorStats;
