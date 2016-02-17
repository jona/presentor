'use strict'

import React from 'react'
import { Link } from 'react-router'
import uuid from 'uuid'

const PageNav = React.createClass({
    render() {
      let btns = this.props.btns.map(function(el, index){
        return (
          <Link key={uuid.v4()} className="btn" to={el.link}>
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
