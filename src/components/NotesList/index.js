import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import NotePreview from '../NotePreview'

class NotesList extends React.Component {
  render() {
    return (
      <div>
        { this.props.notes.map((note, index) => <NotePreview key={index} currentIndex={index} currentNote={note} />) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
