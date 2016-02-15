'use strict'

import React from 'react'
import VisitorStats from './stats/Visitor'
import CountryStats from './stats/Country'

// Helper Components
import PageNav from './PageNav'

var Stats = React.createClass({
  render() {
    let btns = this.topNav()

    return (
      <div>
        <PageNav btns={btns}/>

        <VisitorStats params={this.props.params} />
        <CountryStats params={this.props.params}/>
      </div>
    );
  },

  topNav() {
    return [
      {
        text: `Back to ${this.props.params.name} deck`,
        link: `/decks/${this.props.params.name}/slides/1`,
        iconClass: 'fa fa-arrow-left'
      }
    ]
  }
});

module.exports = Stats;
