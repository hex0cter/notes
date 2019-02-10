import React, { Component } from 'react'
import styles from './index.module.css'
import 'hamburgers/dist/hamburgers.css'
import './index.css'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'

class SiderBar extends Component {
  render() {
    console.log('isSidebarOpen', this.props.isSidebarOpen)

    return (
      <div className={this.props.isSidebarOpen ? styles.SiderbarOpen : styles.Siderbar}>
        <div className={styles.Burger}>
          <button className="hamburger" type="button" onClick={() => {this.props.onUpdateSidebarOpen()}}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar)
