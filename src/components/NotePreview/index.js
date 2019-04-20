import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import styles from './index.module.css'
import { Icon } from 'antd'

class NotePreview extends React.Component {
  updateActiveIndex = (e) => {
    console.log('onUpdateActiveIndex')
    this.props.onUpdateActiveIndex(this.props.currentIndex)
    e.preventDefault()
  }

  deleteNote = (e) => {
    this.props.onDeleteNote(this.props.currentIndex)
    e.preventDefault()
  }

  render() {
    const isNoteSelected = this.props.currentIndex === this.props.activeIndex
    const previewStyle = isNoteSelected ? styles.NotePreviewActive : styles.NotePreview
    return (
      <div className={previewStyle}>
        <div className={styles.PreviewText} onClick={this.updateActiveIndex} >
          { this.props.currentNote.content }
        </div>
        <div className={styles.DeleteButton} onClick={this.deleteNote}>
          <Icon type="delete" />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePreview)
