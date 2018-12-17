import React, { Component } from 'react';
import './TextArea.css';

class TeaxArea extends Component {
  render() {
    return (
      <textarea value={this.props.value} autoFocus style={{width: this.props.width, height: this.props.height}} onChange={this.props.onChange}>
      </textarea>
    );
  }
}

export default TeaxArea;
