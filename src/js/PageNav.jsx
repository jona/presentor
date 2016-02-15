'use strict'

import React from 'react'
import { Link } from 'react-router'

const PageNav = React.createClass({
    render() {
      let btns = this.props.btns.map(function(el, index){
        return (
          <Link key={index} className="btn" to={el.link}>
            <i className={el.iconClass}></i> {el.text}
          </Link>
        )
      })

      return (
        <div className="page-nav">
          {btns}
        </div>
      )
    }
})

module.exports = PageNav
