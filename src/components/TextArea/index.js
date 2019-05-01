import React, { Component } from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import './index.css'

class TeaxArea extends Component {
  onChange = (event) => {
    const content = event.target.value
    this.props.onUpdateContent(content)
  }

  onClick = () => {
    if (window.innerWidth < 600) {
      this.props.onCloseSidebar()
    }
  }

  render() {
    return (
      <textarea
        value={this.props.content}
        autoFocus
        id='textarea'
        style={{width: this.props.width, height: this.props.height}}
        onChange={this.onChange}
        onClick={this.onClick}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaxArea)
