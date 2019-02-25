import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'

class AddNewNote extends React.Component {
  render() {
    return (
      <div onClick={this.props.onAddNewNote}>AddNewNote</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewNote)
