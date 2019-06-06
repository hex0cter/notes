import React, { Component } from 'react'
import styles from './index.module.css'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import NotesList from '../NotesList'
import AddNewNote from '../AddNewNote'
import DeleteAllNotes from '../DeleteAllNotes'
import { Icon } from 'antd'
import 'antd/dist/antd.css'

class Siderbar extends Component {
  render() {
    const burgerStyle = {fontSize: 'x-large'}
    if (this.props.isSidebarOpen) {
      burgerStyle['color'] = 'white'
    } else {
      burgerStyle['color'] = 'grey'
    }
    return (
      <div className={this.props.isSidebarOpen ? styles.SiderbarOpen : styles.Siderbar}>
        <div className={styles.Burger}>
          <Icon type="menu" style={burgerStyle} onClick={() => {this.props.onUpdateSidebarOpen()}} />
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
