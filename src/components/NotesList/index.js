import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'

class NotesList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.notes.map((note, index) => (
            <div key={index} onClick={() => this.props.onUpdateActiveIndex(index)}>{note.lastUpdate}</div>
          )
         )
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
