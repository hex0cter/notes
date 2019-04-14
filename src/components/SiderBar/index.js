import React, { Component } from 'react'
import styles from './index.module.css'
import 'hamburgers/dist/hamburgers.css'
import './index.css'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import NotesList from '../NotesList'
import AddNewNote from '../AddNewNote'
import DeleteAllNotes from '../DeleteAllNotes'

class Siderbar extends Component {
  render() {
    return (
      <div className={this.props.isSidebarOpen ? styles.SiderbarOpen : styles.Siderbar}>
        <div className={styles.Burger}>
          <div className={this.props.isSidebarOpen ? styles.HamburgerOpen : styles.Hamburger} onClick={() => {this.props.onUpdateSidebarOpen()}} >
            <div className="hamburger-box">
              <div className={`hamburger-inner ${this.props.isSidebarOpen ? 'white-hamburger' :  ''}`}></div>
            </div>
          </div>
        </div>
        {this.props.isSidebarOpen ?
          <div className={styles.List}>
          <AddNewNote />
          <NotesList />
          <DeleteAllNotes />
        </div> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Siderbar)
