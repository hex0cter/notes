import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import styles from './index.module.css'

class AddNewNote extends React.Component {
  render() {
    return (
      <div
        className={styles.AddNewNote}
        onClick={this.props.onAddNewNote}>
        + Add new ...
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewNote)
