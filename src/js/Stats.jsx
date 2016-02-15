'use strict'

var React = require('react'),
    VisitorStats = require('./stats/Visitor'),
    CountryStats = require('./stats/Country');

var Stats = React.createClass({
  render: function() {
    return (
      <div>
        <VisitorStats params={this.props.params} />
        <CountryStats params={this.props.params}/>
      </div>
    );
  }
});

module.exports = Stats;
