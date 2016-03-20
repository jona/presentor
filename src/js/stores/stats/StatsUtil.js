'use strict'

const StatsUtil = {
  prepareChartData(data, type){
    let dataPoints = data.map(function(el){
      return el.value
    })

    let chartData = {
      datasets: [
        {
          label: type,
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
}

module.exports = StatsUtil
