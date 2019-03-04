import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import styles from './index.module.css'

class NotePreview extends React.Component {
  render() {
    const isNoteSelected = this.props.currentIndex === this.props.activeIndex
    const previewStyle = isNoteSelected ? styles.NotePreviewActive : styles.NotePreview
    return (
      <div
        className={previewStyle}
        onClick={() => { this.props.onUpdateActiveIndex(this.props.currentIndex) }} >
        { this.props.currentNote.content }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePreview)
