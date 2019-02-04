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

  render() {
    return (
      <textarea value={this.props.content} autoFocus style={{width: this.props.width, height: this.props.height}} onChange={this.onChange}>
      </textarea>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaxArea)
